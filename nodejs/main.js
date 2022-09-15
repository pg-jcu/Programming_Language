import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

let app = http.createServer((request, response) => {
  const _url = request.url;
  const __dirname = path.resolve();
  const queryData = url.parse(_url, true).query;
  let title = queryData.id;

  if (_url == '/') {
    title = 'WEB';
  }

  if (_url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200);

  fs.readFile(`data/${title}`, 'utf8', (err, description) => {
    const template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=Javascript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
    `;

    response.end(template);
  });
});

app.listen(3000);