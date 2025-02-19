const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from the Nodeflow AI backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});