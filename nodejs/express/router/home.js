const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');
const auth = require('../lib/auth.js');

router.get('/', (req, res) => {
  const title = 'Welcome';
  const description = 'Hello, Express!';
  const list = template.list(req.list);
  const html = template.html(title, list,
    `
      <h2>${title}</h2>${description}
      <img src="/image/nodejs.jpg" style="width: 300px; display: block;" />
    `,
    `<a href="/topic/create">create</a>`,
    auth.statusUI(req, res), req, res
  );
  res.send(html);
});

router.get('/login', (req, res) => {
  const title = 'Login';
  const list = template.list(req.list);
  const html = template.html(title, list,
    `
      <form action="/login" method="post">
        <p><input type="text" name="email" placeholder="email" /></p>
        <p><input type="password" name="password" placeholder="password" /><p>
        <p><input type="submit" value="submit"></p>
      </form>
    `,
    ''
  );
  res.send(html);
});

router.post('/login', (req, res) => {
  const post = req.body;
  const email = post.email;
  const password = post.password;

  if (email === 'aaa@test.com' && password === '1234') {
    res.cookie('email', `${email}`)
      .cookie('password', `${password}`)
      .redirect('/');
  } else {
    res.send('Who? <a href="/">Home</a>');
  }
});

router.get('/logout', (req, res) => {
  res.cookie('email', '', { maxAge: 0 })
    .cookie('password', '', { maxAge: 0 })
    .redirect('/');
});

module.exports = router;