import http from 'http';
import fs from 'fs';

let app = http.createServer((request, response) => {
  let url = request.url;

  if (request.url == '/') {
    url = '/index.html';
  }

  if (request.url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200);
  response.end(fs.readFileSync('C:/Users/jeong/Desktop/Folder/coding/programming_language/nodejs/' + url));
});

app.listen(3030);