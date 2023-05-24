const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000; // Change this to the desired port number

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
