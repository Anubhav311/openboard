export class ErrorHandler extends Error {
  constructor(error: any, statusCode: number) {
    super(error);

    this.statusCode = statusCode;
  }
  statusCode: number;
}
