import { Request, Response } from 'express';

export const rootResponse = (req: Request, res: Response):void => {
  res.send('API em NodeJS com TS em MVC');
}
