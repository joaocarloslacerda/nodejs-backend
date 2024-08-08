import http from 'http';

const server = http.createServer((req, res) => {

  // res.end("Ola!")

  let numeroUm = 4;
  let numeroDois = 3;

  let soma = numeroUm + numeroDois;

  if(soma % 2 == 0){
    res.end(`${soma} é PAR`);
  }
  else{
    res.end(`${soma} é INPAR`);
  }

})

server.listen(3000, 'localhost');