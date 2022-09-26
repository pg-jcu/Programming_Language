import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

function templateHTML(title, list, body) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
    </body>
    </html>
  `;
}

function templateList(filelist) {
  const list = `<ul>${filelist.map(file => {
    return `<li><a href="/?id=${file}">${file}</a></li>`;
  }).join('')}</ul>`;

  return list;
}

let app = http.createServer((request, response) => {
  const _url = request.url;
  const __dirname = path.resolve();
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', (err, filelist) => {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        const list = templateList(filelist);
        const template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
    
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', (err, filelist) => {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          const title = queryData.id;
          const list = templateList(filelist);
          const template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
      
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

app.listen(3000);