import { Response, Request } from "express";
import conexao from "../services/conection";

export const listaFuncionariosDepartamento = async (req: Request, res: Response) => {

  const [rows] = await conexao.query(
    `SELECT 
      *
    FROM FUNCIONARIOS`);
    res.json(rows);
};
