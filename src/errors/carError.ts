import IError from '../interfaces/IError';

export class CarError extends Error implements IError {
  public status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

enum CarErrorMessages {
  payload = 'invalid Payload',
  notFound = 'Object not found',
  invalidId = 'Id must have 24 hexadecimal characters',
}

export default CarErrorMessages;
