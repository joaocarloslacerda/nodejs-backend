import http from 'http';

const server = http.createServer((req, res) => {

  res.end("rodando")

});

server.listen(3000, 'localhost');