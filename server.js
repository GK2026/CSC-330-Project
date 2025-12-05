const http = require("http");
const fs = require("fs");
const path = require("path");
const mysql = require('mysql2');
const url = require("url");

//browser server comm - send json
function send(res, code, msg) {
  res.writeHead(code, {"Content-Type":"application/json"});
  res.end(JSON.stringify(msg));
}

//browser server comm - read
function read(req, callback) {
  let data = "";
  req.on("data", chunk => data += chunk);
  req.on("end", () => {
    let jsonObj = {};
    if (data) jsonObj = JSON.parse(data);
    callback(jsonObj);
  });
}

//established connection to GCP mySQL
const connection_pool = mysql.createPool({
  host: '34.148.250.171',
  user: 'csc330',
  password: 'ProjectMySQL2025!',
  database: 'userList',
  connectionLimit: 10

})

// Relocated all the mySQL code in our project to here since it should be in our backend (e.g. login and signup.js files are frontend)
// Relocate or deleted mySQL code depending on redundacy
const server = http.createServer((req, res) => {
  const parse = url.parse(req.url, true);
  const pathname = parse.pathname;

  // POST method, client side will access the database through /signup
  // Checks for available username, and if available, inserts the username and password into the database
  // NOT FULLY FUNCTIONAL WITH THE JS AND HTML FILES, WORK IN PROGRESS
  if (req.method == "POST" && pathname == "/signup") {
    return read(req, function (data) {
      const username = data.username;
      const password = data.password;

      connection_pool.query(
        "SELECT id FROM userList WHERE username=?",
        [username],
        function (err, results) { // retrieving mySQL's response to determine what to do with the data
          if (err) {
            send(res, 400, { isFunctional: false, error: err.message });
          } else if (results.length > 0) {
            send(res, 400, { isFunctional: false, error: "Username taken" });
          } else {
            connection_pool.query(
              "INSERT INTO userList (username, password) VALUES (?, ?)",
              [username, password],
              function (err2) {
                if (err2) {
                  send(res, 400, { isFunctional: false, error: err2.message });
                } else {
                  send(res, 200, { isFunctional: true, message: "Signup successful" });
                }
                // Removed the ending of the connection_pool
              }
            );
          }
        }
      );
    });
  }

  // POST method, client side will access the database through /login
  // Checks if a specific username and password combo exists via the length of results, and if it exists it will return "isFunctional: true", and the corresponding userID
  // Otherwise will send a 400 error
  if (req.method == "POST" && pathname == "/login") {
    return read(req, function (data) {
      const username = data.username;
      const password = data.password;

      connection_pool.query(
        "SELECT id FROM userList WHERE username=? AND password=?",
        [username, password],
        function (err, results) {
          if (err) {
            send(res, 400, { isFunctional: false, error: err.message });
          } else if (results.length > 0) {
            send(res, 200, { isFunctional: true, userId: results[0].id });
          } else {
            send(res, 400, { isFunctional: false, error: "Username and/or password incorrect" });
          }
          // Removed the ending of the connection_pool
        }
      );
    });
  }
  
  //post method for /questionnaire
  if (req.method == "POST" && pathname == "/questionnaire") {
    return read(req, function (data) {
      let username = "Jane Doe"; //hardcoded for now
      let name = data.name;
      let gender = data.gender;
      let age = data.age;
      let weight = data.weight;
      let height = data.height;
      let calorieGoal = data.calorieGoal;
      let fatGoal = data.fatGoal;
      let sodiumGoal = data.sodiumGoal;
      let healthGoal = data.healthGoal;

    connection_pool.query(
      "UPDATE users SET name=?, gender=?, age=?, weight=?, height=?, calorieGoal=?, fatGoal=?, sodiumGoal=?, healthGoal=? WHERE username=?",
      [name, gender, age, weight, height, calorieGoal, fatGoal, sodiumGoal, healthGoal, username],
      function (err, result) {
        if (err) {
          send(res, 400, { isFunctional: false, error: err.message });
        } else {
          send(res, 200, { isFunctional: true, message: "saved to db" });
        }
      }
    );
    });
}
  //uses express to allow server to grab and process static files
  let filePath = path.join(__dirname, "code", pathname === "/" ? "home.html" : pathname);
  //app.use just tells the server that it will be using the files inside the parathesis
  //express.static tells the server that it's going to be using static files (html, css, js, etc)

  // Determine content type
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
  };
  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// get connected to user database
// moved from login.js, database code should run through backend (server.js)
// moved from signup.js

server.listen(80, () => {
  console.log("Server running on port 80");
});
