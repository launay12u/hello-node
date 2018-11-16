const express = require('express');
const expressStatsd = require('express-statsd');

const app = express();

app.use(expressStatsd());
function statsd(path) {
  return (req, res, next) => {
    const method = req.method || 'unknown_method';
    req.statsdKey = ['http', method.toLowerCase(), path].join('.');
    next();
  };
}
// Define request response in root URL (/)
app.get('/', statsd('home'), (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/users', statsd('user'), (req, res) => {
  res.json({ message: 'Hello user!' });
});
// Launch listening server on port 8080

/* istanbul ignore next */
const port = process.env.PORT || 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app listening on port ${port}`);
});

module.exports = app;
