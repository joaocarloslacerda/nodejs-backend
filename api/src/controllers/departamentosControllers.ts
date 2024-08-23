import { Response, Request } from "express";
import conexao from "../services/conection";
import { URLSearchParams } from "url";
import { ResultSetHeader } from "mysql2";

export const listaDetartamentos = async (req: Request, res: Response) => {
  const { id } = req.params;

  if(id){
    const [rows] = await conexao.execute('SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ?',
      [id]
    );
    res.json(rows);
    return;
  }
  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
    res.json(rows);
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
  }catch (error) {
    res.status(500).json({
      message: 'Erro na criação'
    })
  }
};

export const deletaDepartamentos = async (req: Request, res: Response) => {
  const { id } = req.query;

  try{
      const [result] = await conexao.execute<ResultSetHeader>(
        'DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?',
        [id]
      );

      if(result.affectedRows === 0){
        res.status(404).json({
          message: 'Departamento não encontrado',
          id
        });
        return;
      }else{
        res.status(201).json({
          message: 'Departamento deletado',
          id
        });
        return;
      }

  }catch (error){
    let message = '';

    switch (error.code) {
      case 'ER_ROW_IS_REFERENCED_2':
        message = 'Departamento possui vinculos e não pode ser excluído';
      break;
      default:
        message = 'Erro na exclusão do departamento';
      break;
    }

    res.status(500).json({
      message
    });
  }
};

export const atualizaDepartamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, sigla } = req.body;

  try{
    const [result] = await conexao.execute<ResultSetHeader>(
      'UPDATE DEPARTAMENTOS SET nome = ?, sigla = ? WHERE id_departamento = ?',
      [nome, sigla, id]
    );

    if(result.affectedRows === 0){
      res.status(404).json({
        message: 'Departamento não encontrado',
        id
      });
      return;
    }

    res.status(201).json({
      message: 'Departamento atualizado',
      id
    });
    return;
    
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar o departamento"
    });
    return;
  }
}

