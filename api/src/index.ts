import express, {Request, Response} from 'express';

const app = express();
const port = 3030;

app.get('/', (req: Request, res: Response):void => {
  res.send('API em NodeJS com TS');
});


app.get('/ping', (req: Request, res: Response):void => {
  res.send('Pong 🏓');
});

app.get('/soma', (req: Request, res: Response):void => {

  //http://localhost:3030/soma?num1=1&num2=1&num3=5


  let valorUm: number = 4;
  let valorDois: number = 3;
  let valorTres: number = 1;

  let result: number = valorUm + valorDois + valorTres;

  res.send(`Resultado: ${result}`);
});

app.get('/departamentos/:id', (req: Request, res: Response):void => {
  res.send('Pong 🏓');
});

app.get('/clientes', (req: Request, res: Response):void => {
  
  const html: string = '<h1>Clientes</h1>';

  res.send(html);  
})


app.listen(port, () => {
  console.log(`Servidor escutando na porta http://localhost:${port}`)
});

