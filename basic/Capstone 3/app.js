const express = require('express');
const path = require('path'); // For joining file paths
const bodyParser = require('body-parser'); // For parsing form data
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set views directory

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming form data (usually from POST requests)
app.use(bodyParser.urlencoded({ extended: true }));

// Routes (using a separate file for better organization)
const router = require('./routes/index');
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});