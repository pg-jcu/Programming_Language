const express = require('express');
const fs = require('fs');
const qs = require('querystring');
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
    const filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
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

app.get('/create', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const title = 'WEB - create';
    const list = template.list(filelist);
    const html = template.html(title, list, `
      <form action="/create" method="post">
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `, '');
    res.send(html); 
  });
});

app.post('/create', (req, res) => {
  let body = '';

  req.on('data', data => {
    body += data;
  });

  req.on('end', () => {
    const post = qs.parse(body);
    const title = post.title;
    const description = post.description;

    fs.writeFile(`data/${title}`, description, 'utf8', err => {
      res.redirect(`/page/${title}`);
    });
  });
});

app.get('/update/:pageId', (req, res) => {
  fs.readdir('./data', (err, filelist) => {
    const filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
      const title = req.params.pageId;
      const list = template.list(filelist);
      const html = template.html(title, list, `
        <form action="/update" method="post">
          <input type="hidden" name="id" value="${title}" />
          <p>
            <input type="text" name="title" placeholder="title" value="${title}" />
          </p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      `, '');
      res.send(html);
    });
  });
});

app.post('/update', (req, res) => {
  let body = '';

  req.on('data', data => {
    body += data;
  });

  req.on('end', () => {
    const post = qs.parse(body);
    const id = post.id;
    const title = post.title;
    const description = post.description;

    fs.rename(`data/${id}`, `data/${title}`, err => {
      fs.writeFile(`data/${title}`, description, 'utf8', err => {
        res.redirect(`page/${title}`);
      });
    });
  });
});

app.listen(port, () => {
  console.log(port);
});