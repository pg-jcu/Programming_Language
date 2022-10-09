const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const topicRouter = require('./router/topic.js');
const homeRouter = require('./router/home.js');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', (req, res, next) => {
  fs.readdir('./data', (err, filelist) => {
    req.list = filelist;
    next();
  });
});

app.use('/', homeRouter);
app.use('/topic', topicRouter);

app.use((req, res, next) => {
  res.status(404).send('Sorry can not find that!');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(port);
});