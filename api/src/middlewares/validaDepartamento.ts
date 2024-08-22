import { Request, Response, NextFunction } from "express";


const validaDepartamento = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;
  const { nome, sigla } = req.body;

  if (req.method === 'PUT' && isNaN(Number(id))) {
    res.status(400).json({
      message: 'Identificador deve ser numérico'
    });
    return;
  };

  if((typeof nome !== 'string' || nome.trim() === '') || (typeof sigla !== 'string' || sigla.trim() === '')){
    res.status(400).json({
      message: 'Campo inválido ou ausente'
    });
    return;
  };

  next();
} 

export default validaDepartamento;
