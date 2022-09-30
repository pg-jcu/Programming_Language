const express = require('express');
const fs = require('fs');
const path = require('path');
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
      `<a href="/create">create</a>`
    );
    res.send(html);
  });
});

app.get('/page/:pageId', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const filteredId = path.parse(req.params.pageId);
    fs.readFile(`/data/${filteredId}`, 'utf8', (err, description) => {
      const title = req.params.pageId;
      const list = template.list(filelist);
      const html = template.html(title, list,
        `<h2>${title}</h2>${description}`,
        `
          <a href="/create">create</a>
          <a href="/update/${title}">update</a>
          <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${title}" />
            <input type="submit" value="delete" />
          </form>
        `
      );
      res.send(html);
    });
  });
});

app.listen(port, () => {
  console.log(port);
});