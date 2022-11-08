const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const template = require('../lib/template.js');
const auth = require('../lib/auth.js');

router.get('/create', (req, res) => {
  if (!auth.isOwner(req, res)) {
    res.redirect('/');
    return false;
  }

  const title = 'WEB - create';
  const list = template.list(req.list);
  const html = template.html(title, list, `
    <form action="/topic/create" method="post">
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit" value="submit" />
      </p>
    </form>
  `, '', auth.statusUI(req, res));
  res.send(html); 
});

router.post('/create', (req, res) => {
  if (!auth.isOwner(req, res)) {
    res.redirect('/');
    return false;
  }

  const post = req.body;
  const title = post.title;
  const description = post.description;

  fs.writeFile(`data/${title}`, description, 'utf8', err => {
    res.redirect(`/topic/${title}`);
  });
});

router.get('/update/:pageId', (req, res) => {
  if (!auth.isOwner(req, res)) {
    res.redirect('/');
    return false;
  }

  const filteredId = path.parse(req.params.pageId).base;

  fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
    const title = req.params.pageId;
    const list = template.list(req.list);
    const html = template.html(title, list, `
      <form action="/topic/update" method="post">
        <input type="hidden" name="id" value="${title}" />
        <p>
          <input type="text" name="title" placeholder="title" value="${title}" />
        </p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit" value="submit" />
        </p>
      </form>
    `, '', auth.statusUI(req, res));
    res.send(html);
  });
});

router.post('/update', (req, res) => {
  if (!auth.isOwner(req, res)) {
    res.redirect('/');
    return false;
  }

  const post = req.body;
  const id = post.id;
  const title = post.title;
  const description = post.description;

  fs.rename(`data/${id}`, `data/${title}`, err => {
    fs.writeFile(`data/${title}`, description, 'utf8', err => {
      res.redirect(`/topic/${title}`);
    });
  });
});

router.post('/delete', (req, res) => {
  if (!auth.isOwner(req, res)) {
    res.redirect('/');
    return false;
  }

  const post = req.body;
  const id = post.id;
  const filteredId = path.parse(id).base;

  fs.unlink(`data/${filteredId}`, err => {
    res.redirect('/');
  });
});

router.get('/:pageId', (req, res, next) => {
  const filteredId = path.parse(req.params.pageId).base;

  fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
    if (!err) {
      const title = req.params.pageId;
      const sanitizedTitle = sanitizeHtml(title);
      const sanitizedDescription = sanitizeHtml(description);
      const list = template.list(req.list);
      const html = template.html(sanitizedTitle, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        `
          <a href="/topic/create">create</a>
          <a href="/topic/update/${sanitizedTitle}">update</a>
          <form action="/topic/delete" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}" />
            <input type="submit" value="delete" />
          </form>
        `,
        auth.statusUI(req, res)
      );
      res.send(html);
    } else {
      next(err);
    }
  });
});

module.exports = router;