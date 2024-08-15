import express, {Request, Response} from 'express';

const app = express();
app.use(express.static('public'));
const port = 3030;

app.get('/', (req: Request, res: Response):void => {
  res.send('API em NodeJS com TS');
});


app.get('/ping', (req: Request, res: Response):void => {
  res.send('Pong 🏓');
});

app.get('/soma', (req: Request, res: Response):void => {

  //http://localhost:3030/soma?num1=1&num2=1&num3=5

  // let valorUm: number = 4;
  // let valorDois: number = 3;
  // let valorTres: number = 1;
  // let result: number = valorUm + valorDois + valorTres;

  // let {num1, num2, num3} = req.query;
  // num1 = parseInt(num1);
  // num2 = parseInt(num2);
  // num3 = parseInt(num3);

  // const result = num1 + num2 + num3;

  let {num1, num2, num3} = req.query as {num1: string, num2: string, num3: string};
  const result = parseInt(num1, 10) + parseInt(num2, 10) + parseInt(num3, 10);

  res.send(`Resultado: ${result}`);
});

app.get('/departamentos/:id', (req: Request, res: Response):void => {

  console.log(req.params);

  res.send('Pong 🏓');
});

app.get('/clientes', (req: Request, res: Response):void => {
  
  const html: string = '<link href="css/estilo.css" rel="stylesheet"><h1>Clientes</h1>';

  res.send(html);  
});

app.get('/funcionarios', (req: Request, res: Response):void => {
  const funcionario = {
    nome: 'Cicero',
    salario: '2000.05'
  };

  res.json(funcionario);
});

app.post('/departamentos', (req: Request, res: Response):void => {
  
  
  
  res.send('POST departamentos');
});


app.listen(port, () => {
  console.log(`Servidor escutando na porta http://localhost:${port}`)
});

