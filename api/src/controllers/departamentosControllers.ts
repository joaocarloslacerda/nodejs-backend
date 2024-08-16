import { Response, Request } from "express";
import conexao from "../services/conection";

export const detartamentosResponse = async (req: Request, res: Response) => {

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);

  res.send('GET departamentos');
};

export const departamentosRequest = async (req: Request, res: Response) => {
  const { nome, sigla } = req.body;

  try{
    const [result] = await conexao.execute(
      'INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (? , ?)',
      [sigla, nome]
    );

    res.status(201).json({
      message: 'Departamento criado'
    });
  }catch (e) {
    res.status(500).json({
      message: 'Erro na criação'
    })
  }
};
