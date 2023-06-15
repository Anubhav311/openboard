import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/errorHandler";

const errorHandler = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;
