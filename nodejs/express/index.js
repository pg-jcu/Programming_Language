const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const template = require('./lib/template.js');

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

app.get('/', (req, res) => {
  const title = 'Welcome';
  const description = 'Hello, Express!';
  const list = template.list(req.list);
  const html = template.html(title, list,
    `
      <h2>${title}</h2>${description}
      <img src="/image/nodejs.jpg" style="width: 300px; display: block;" />
    `,
    `<a href="/create">create</a>`
  );
  res.send(html);
});

app.get('/page/:pageId', (req, res, next) => {
  const filteredId = path.parse(req.params.pageId).base;

  fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
    if (!err) {
      const title = req.params.pageId;
      const list = template.list(req.list);
      const html = template.html(title, list,
        `<h2>${title}</h2>${description}`,
        `
          <a href="/create">create</a>
          <a href="/update/${title}">update</a>
          <form action="/delete" method="post">
            <input type="hidden" name="id" value="${title}" />
            <input type="submit" value="delete" />
          </form>
        `
      );
      res.send(html);
    } else {
      next(err);
    }
  });
});

app.get('/create', (req, res) => {
  const title = 'WEB - create';
  const list = template.list(req.list);
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

app.post('/create', (req, res) => {
  const post = req.body;
  const title = post.title;
  const description = post.description;

  fs.writeFile(`data/${title}`, description, 'utf8', err => {
    res.redirect(`/page/${title}`);
  });
});

app.get('/update/:pageId', (req, res) => {
  const filteredId = path.parse(req.params.pageId).base;

  fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
    const title = req.params.pageId;
    const list = template.list(req.list);
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

app.post('/update', (req, res) => {
  const post = req.body;
  const id = post.id;
  const title = post.title;
  const description = post.description;

  fs.rename(`data/${id}`, `data/${title}`, err => {
    fs.writeFile(`data/${title}`, description, 'utf8', err => {
      res.redirect(`page/${title}`);
    });
  });
});

app.post('/delete', (req, res) => {
  const post = req.body;
  const id = post.id;
  const filteredId = path.parse(id).base;

  fs.unlink(`data/${filteredId}`, err => {
    res.redirect('/');
  });
});

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