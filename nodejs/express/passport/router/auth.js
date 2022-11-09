const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');

router.get('/login', (req, res) => {
  const title = 'Login';
  const list = template.list(req.list);
  const html = template.html(title, list, `
    <form action="/auth/login" method="post">
      <p><input type="text" name="email" placeholder="email" /><p>
      <p><input type="password" name="password" placeholder="password" /><p>
      <p>
        <input type="submit" value="login" />
      </p>
    </form>
  `, '');
  res.send(html);
});

// router.post('/login', (req, res) => {
//   const post = req.body;
//   const email = post.email;
//   const password = post.password;

//   if (email === authData.email && password === authData.password) {
//     req.session.is_logined = true;
//     req.session.nickname = authData.nickname;
//     req.session.save((err) => {
//       res.redirect('/');
//     });
//   } else {
//     res.send('Who?');
//   }
// });

router.get('/logout', (req, res) => {
  req.logout((err) => {
    res.redirect('/');
  });
});

module.exports = router;