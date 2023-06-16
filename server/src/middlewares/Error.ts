import { NextFunction, Request, Response } from "express";
// import { MongoError, MongoServerError } from "mongodb";
import { ErrorHandler } from "../utils/errorHandler";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let message = "Internal Server Error";
  let statusCode = 500;

  if (err.constructor.name == "ErrorHandler") {
    message = "Custom Error";
    statusCode = 401;
  }

  if (err.constructor.name == "MongoServerError") {
    if (err.code === 11000) {
      message = "Duplicate Key Error";
      statusCode = 400;
    }
  }

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default errorHandler;
