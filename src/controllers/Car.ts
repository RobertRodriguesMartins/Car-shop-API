import { Request, Response } from 'express';
import { IService, ICar } from '../interfaces';

class CarController {
  private carService: IService<ICar>;
  constructor(service: IService<ICar>) {
    this.carService = service;
  }
  public async create(
    req: Request,
    res: Response<ICar>,
  ): Promise<Response<ICar>> {
    const payload: unknown = req.body;

    const response = await this.carService.create(payload);

    return res.status(201).json(response);
  }
  public async read(
    req: Request,
    res: Response<ICar[]>,
  ): Promise<Response<ICar[]>> {
    const response = await this.carService.read();

    return res.status(200).json(response);
  }
  public async readOne(
    req: Request,
    res: Response<ICar>,
  ): Promise<Response<ICar>> {
    const { params } = req;
    const response = await this.carService.readOne(params);

    return res.status(200).json(response);
  }
}

export default CarController;
