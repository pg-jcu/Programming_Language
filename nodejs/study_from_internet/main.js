import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import qs from 'querystring';
import template from './lib/template.js';

const app = http.createServer((request, response) => {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', (err, filelist) => {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        const list = template.list(filelist);
        const html = template.html(title, list, 
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a>`
        );
    
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir('./data', (err, filelist) => {
        const filterId = path.parse(queryData.id).base;
        fs.readFile(`data/${filterId}`, 'utf8', (err, description) => {
          const title = queryData.id;
          const list = template.list(filelist);
          const html = template.html(title, list, 
            `<h2>${title}</h2><p>${description}</p>`,
            `<a href="/create">create</a> 
             <a href="/update?id=${title}">update</a>
             <form action="/delete_process" method="post">
              <input type="hidden" name="id" value="${title}" />
              <input type="submit" value="delete" />
             </form>`
          );
      
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('./data', (err, filelist) => {
      const title = 'create';
      const list = template.list(filelist);
      const html = template.html(title, list, `
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
      response.end(html);
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
      const filterId = path.parse(queryData.id).base;
      fs.readFile(`data/${filterId}`, 'utf8', (err, description) => {
        const title = queryData.id;
        const list = template.list(filelist);
        const html = template.html(title, list, `
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
        response.end(html);
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
      const filterId = path.parse(id).base;

      fs.unlink(`data/${filterId}`, err => {
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