import { ErrorRequestHandler, Response } from 'express';

const errorMD: ErrorRequestHandler = (err: Error, _req, res: Response, _next) =>
  res.status(400).json({ message: err.message });

export default errorMD;
