
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
// Middleware for parsing JSON requests
app.use(bodyParser.json());
// Sample route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});
// Sample route for a GET request
app.get('/api/sample', (req, res) => {
  res.json({ message: 'This is a sample GET response' });
});
// Sample route for a POST request
app.post('/api/sample', (req, res) => {
  const data = req.body;
  res.json({ message: 'This is a sample POST response', data: data });
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});