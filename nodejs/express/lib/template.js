module.exports = {
  html(title, list, body, control) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>WEB - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <a href="/auth/login">login</a>
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