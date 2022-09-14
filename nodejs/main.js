import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

let app = http.createServer((request, response) => {
  let _url = request.url;
  const __dirname = path.resolve();
  let queryData = url.parse(_url, true).query;

  if (_url == '/') {
    url = '/index.html';
  }

  if (_url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200);
  response.end(queryData.id);
});

app.listen(3000);