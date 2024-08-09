import http from 'http';

const server = http.createServer((req, res) => {


  console.log(req.method)
  return;
  //res.end("rodando...")

})

server.listen(3000, 'localhost');