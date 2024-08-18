import { Response, Request } from "express";
import conexao from "../services/conection";
import { URLSearchParams } from "url";

export const listaDetartamentos = async (req: Request, res: Response) => {

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);

  res.send('GET departamentos');
};

export const insereDepartamentos = async (req: Request, res: Response) => {
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
  console.log(req.body);
};

export const deletaDepartamentos = async (req: Request, res: Response) => {
  const queryParams = req.url.split('?')[1];
  const params = new URLSearchParams(queryParams);
  const id_departamento = parseInt(params.get('id'));

  try{
    const [result] = await conexao.execute(
      'DELETE FROM DEPARTAMENTOS WHERE id_departamento = (?)',
      [id_departamento]
    );
    res.status(201).json({
      message: 'Departamento deletado'
    });
  }catch (e){
    res.status(500).json({
      message: 'Erro na deleção'
    });
  }
};
