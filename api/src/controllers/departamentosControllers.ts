import { Response, Request } from "express";

export const detartamentosResponse = (req: Request, res: Response):void => {
  res.send('GET departamentos');
};

export const departamentosRequest = (req: Request, res: Response):void => {
  console.log(req.body);
  res.send('POST departamentos');
};
