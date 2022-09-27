import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import qs from 'querystring';

function templateHTML(title, list, body, control) {
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
}

function templateList(filelist) {
  const list = `<ul>${filelist.map(file => {
    return `<li><a href="/?id=${file}">${file}</a></li>`;
  }).join('')}</ul>`;

  return list;
}

const app = http.createServer((request, response) => {
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
        const template = templateHTML(title, list, 
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a>`
        );
    
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', (err, filelist) => {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          const title = queryData.id;
          const list = templateList(filelist);
          const template = templateHTML(title, list, 
            `<h2>${title}</h2><p>${description}</p>`,
            `<a href="/create">create</a> 
             <a href="/update?id=${title}">update</a>
             <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${title}" />
              <input type="submit" value="delete" />
             </form>`
          );
      
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('./data', (err, filelist) => {
      const title = 'create';
      const list = templateList(filelist);
      const template = templateHTML(title, list, `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title" /></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit" value="submit" />
          </p>
        </form>
      `, '');
  
      response.writeHead(200);
      response.end(template);
    });
  } else if (pathname === '/create_process') {
    let body = '';

    request.on('data', data => {
      body += data;
    });

    request.on('end', () => {
      const post = qs.parse(body);
      const title = post.title;
      const description = post.description;

      fs.writeFile(`data/${title}`, description, 'utf8', err => {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  } else if (pathname === '/update') {
    fs.readdir('./data', (err, filelist) => {
      fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
        const title = queryData.id;
        const list = templateList(filelist);
        const template = templateHTML(title, list, `
            <form action="/update_process" method="post">
              <input type="hidden" name="id" value="${title}" />
              <p><input type="text" name="title" placeholder="title" value="${title}" /></p>
              <p>
                <textarea name="description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input type="submit" value="submit" />
              </p>
            </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
    
        response.writeHead(200);
        response.end(template);
      });
    });
  } else if (pathname === '/update_process') {
    let body = '';

    request.on('data', data => {
      body += data;
    });

    request.on('end', () => {
      const post = qs.parse(body);
      const id = post.id;
      const title = post.title;
      const description = post.description;

      fs.rename(`data/${id}`, `data/${title}`, err => {
        fs.writeFile(`data/${title}`, description, 'utf8', err => {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        });
      });
    });
  } else if (pathname === '/delete_process') {
    let body = '';

    request.on('data', data => {
      body += data;
    });

    request.on('end', () => {
      const post = qs.parse(body);
      const id = post.id;

      fs.unlink(`data/${id}`, err => {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

app.listen(3000);