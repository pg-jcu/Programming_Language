const express = require('express');
const fs = require('fs');
const template = require('./lib/template.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const title = 'Welcome';
    const description = 'Hello, Express!';
    const list = template.list(filelist);
    const html = template.html(title, list,
      `<h2>${title}</h2>${description}`,
      ''
    );
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(port);
});