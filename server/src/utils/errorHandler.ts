import { Error as MongooseError } from "mongoose";

export class ErrorHandler extends Error {
  constructor(error: any, statusCode: number) {
    super(error);

    this.statusCode = statusCode;
  }
  statusCode: number;
}
