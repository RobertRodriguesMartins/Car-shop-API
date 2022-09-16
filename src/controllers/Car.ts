import { Request, Response } from 'express';
import { IService, ICar } from '../interfaces';

class CarController {
  private carService: IService<ICar>;
  constructor(service: IService<ICar>) {
    this.carService = service;
  }

  async create(req: Request, res: Response<ICar>): Promise<Response<ICar>> {
    const payload: unknown = req.body;

    const response = await this.carService.create(payload);

    return res.status(201).json(response);
  }
}

export default CarController;
