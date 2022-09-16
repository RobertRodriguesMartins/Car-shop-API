import { ErrorRequestHandler, Response } from 'express';
import IError from '../interfaces/IError';

const errorMD: ErrorRequestHandler = (
  err: unknown,
  _req,
  res: Response,
  _next,
) => {
  const customError = err as IError;
  const { message } = customError;
  if (customError.status) {
    return res.status(customError.status).json({ error: message });
  }
  return res.status(500).json({ message });
};

export default errorMD;
