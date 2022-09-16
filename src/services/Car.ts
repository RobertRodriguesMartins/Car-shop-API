import CarError from '../errors/carError';
import { ICar, IService, IModel } from '../interfaces';
import carValidator from './validators/car';

class CarService implements IService<ICar> {
  private carModel: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this.carModel = model;
  }
  public async create(obj: unknown): Promise<ICar> {
    const validInput = carValidator.safeParse(obj);

    if (!validInput.success) throw new Error(CarError.payload);

    const response = await this.carModel.create(validInput.data as ICar);

    return response;
  }
  public async read(): Promise<ICar[]> {
    const response = await this.carModel.read();

    return response;
  }
}

export default CarService;
