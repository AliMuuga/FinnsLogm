// backend/app.js

const express = require('express');
const path = require('path');
const app = express();

// Serve static files like HTML, CSS, and images from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Main Route: serve the main HTML file (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server and listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
