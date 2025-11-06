const http = require("http");
const fs = require("fs");
const path = require("path");
const mysql = require('mysql2');

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") filePath = "./Project.html";

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
//mySQL related code goes here
const connection_pool = mysql.createPool({
  host: '34.148.250.171',
  user: 'csc330',
  password: 'ProjectMySQL2025!',
  database: 'userList',
  connectionLimit: 10
}) // get connected to user database
function login() {
	let user = document.getElementById('user');
	let password = document.getElementById('pass');
	connection_pool.query('SELECT' + username,password + 'FROM userList', function (error, select_results, fields) {
		if (error) { //returns if user and password do not match
			console.log('Username or Password incorrect');
			connection_pool.end();
		} else { //returns if user and password do match
			//log in
			window.location.replace("project.html");//redirects to homepage
			conection_pool.end();
	}
}
)};



server.listen(80, () => {
  console.log("Server running on port 80");
});
