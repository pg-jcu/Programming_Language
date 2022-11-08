module.exports = {
  isOwner(req, res) {
    if (req.session.is_logined) {
      return true;
    } else {
      return false;
    }
  },
  statusUI(req, res) {
    let authStatusUI = '<a href="/auth/login">login</a>';
  
    if (this.isOwner(req, res)) {
      authStatusUI = `${req.session.nickname} | <a href="/auth/logout">logout</a>`;
    }
  
    return authStatusUI;
  }
};