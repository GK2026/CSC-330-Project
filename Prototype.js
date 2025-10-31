// --------------------------
// BROWSER CODE
// --------------------------
// This code only runs in the browser environment (window exists)
if (typeof window !== "undefined") {
  // Wait until the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    
    // Set the header text
    const message = 'This is our prototype';
    document.querySelector('#header').innerHTML = message;

    // Log the message to the browser console
    console.log(message);

    // --------------------------
    // Calorie tracker logic
    // --------------------------
    const addBtn = document.getElementById("addCal");       // Button to add calories
    const calInput = document.getElementById("Calorie");   // Input field for calories
    const totalDisplay = document.getElementById("totalCal"); // Span to display total

    // Start total calories at 0
    let totalCalories = 0;

    // Event listener for button click
    addBtn.addEventListener("click", () => {
      const calories = Number(calInput.value); // Convert input to number

      // Validate input
      if (!isNaN(calories) && calories > 0) {
        // Add to total and update display
        totalCalories += calories;
        totalDisplay.textContent = totalCalories;

        // Clear input field
        calInput.value = "";
      } else {
        // Alert if input is invalid
        alert("Please enter a valid calorie number.");
      }
    });
  });
}

// --------------------------
// NODE SERVER CODE
// --------------------------
// This code only runs in Node (no window object)
if (typeof window === "undefined") {
  const http = require('http');  // Node HTTP module to create server
  const fs = require('fs');      // File system module to read files
  const path = require('path');  // Path module for handling file paths

  // Create the HTTP server
  const myserver = http.createServer((req, res) => {
    let filePath = '.' + req.url;       // Map URL to file path
    if (filePath === './') filePath = './Project.html'; // Default file

    // Convert to absolute path
    filePath = path.join(__dirname, filePath);

    // Determine file extension
    const extname = String(path.extname(filePath)).toLowerCase();

    // Define MIME types for content
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
    };

    // Default content type if not found
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error: File not found');
      } else {
        // Serve the file with correct content type
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  // --------------------------
  // SERVER LISTENING LINE
  // --------------------------
  // Listen on port 80 and log message when ready
  myserver.listen(80, () => {
    console.log('Server is running on port 80...');
  });
}
