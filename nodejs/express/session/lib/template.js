module.exports = {
  html(title, list, body, control, authStatusUI = '<a href="/auth/login">login</a>') {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>WEB - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        ${authStatusUI}
        <h1><a href="/">HOME</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
    `;
  },
  list(filelist) {
    const list = `<ul>${filelist.map(file => {
      return `<li><a href="/topic/${file}">${file}</a></li>`;
    }).join('')}</ul>`;
  
    return list;
  }
};