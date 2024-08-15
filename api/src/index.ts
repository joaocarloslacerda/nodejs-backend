import express, { Request, Response } from 'express';
import defaultRouter from '../src/routes/defaultRoutes';
import departamentosRoutes from '../src/routes/departamentosRoutes'

const porta = 3030;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(defaultRouter);
app.use(departamentosRoutes);


app.listen(porta, () => {
  console.log(`Servidor escutando na
porta http://localhost:${porta}`);
})