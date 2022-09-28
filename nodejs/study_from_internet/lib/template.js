const template = {
  html(title, list, body, control) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
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
      return `<li><a href="/?id=${file}">${file}</a></li>`;
    }).join('')}</ul>`;
  
    return list;
  }
};

export default template;