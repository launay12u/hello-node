const express = require('express');

const app = express();

// Define request response in root URL (/)

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Launch listening server on port 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app listening on port ${port}`);
});

module.exports = app;
