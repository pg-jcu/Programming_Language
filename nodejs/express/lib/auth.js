const cookie = require('cookie');

function isOwner(req, res) {
  let isowner = false;
  let cookies = {};

  if (req.headers.cookie) {
    cookies = cookie.parse(req.headers.cookie);
  }

  if (cookies.email === 'aaa@test.com' && cookies.password === '1234') {
    isowner = true;
  }

  return isowner;
}

module.exports = {
  statusUI(req, res) {
    let UI = '<a href="/login">login</a>';

    if (isOwner(req, res)) {
      UI = '<a href="/logout">logout</a>';
    }

    return UI;
  }
};