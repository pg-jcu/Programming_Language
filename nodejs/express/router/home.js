const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');

router.get('/', (req, res) => {
  const title = 'Welcome';
  const description = 'Hello, Express!';
  const list = template.list(req.list);
  const html = template.html(title, list,
    `
      <h2>${title}</h2>${description}
      <img src="/image/nodejs.jpg" style="width: 300px; display: block;" />
    `,
    `<a href="/topic/create">create</a>`
  );
  res.send(html);
});

module.exports = router;