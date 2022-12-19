const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(session({
  secret: 'qweradsfcvxzcvdsf',
  resave: false,
  saveUninitialized: true,
  store: new FileStore({logFn: () => {}})
}));

app.get('*', (req, res, next) => {
  fs.readdir('./data', (err, filelist) => {
    req.list = filelist;
    next();
  });
});

const homeRouter = require('./router/home.js');
const topicRouter = require('./router/topic.js');
const authRouter = require('./router/auth.js');

app.use('/', homeRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.status(404).send('Sorry can not find that!');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(PORT);
});