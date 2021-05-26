import jwt from 'jsonwebtoken';
import config from '../config/config';
import { Request, Response, NextFunction } from 'express';

export interface IPayload {
  user: any;
  iat: number;
  exp: number;
}

export const TokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res
      .status(401)
      .json({ errors: [{ msg: 'No Token, Authorization Denied' }] });
  }

  try {
    const decode = jwt.verify(token, config.jwtSecret) as IPayload;
    (<any>req).user = decode.user;
    next();
  } catch (err) {
    res.status(401).send('Token is not valid');
  }
};
