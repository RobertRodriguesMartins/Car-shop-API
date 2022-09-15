import { ICar, IService, IModel } from '../interfaces';
import carValidator from './validators/car';

class CarService implements IService<ICar> {
  private carModel: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this.carModel = model;
  }
  public async create(obj: unknown): Promise<ICar> {
    const validInput = carValidator.safeParse(obj);

    if (!validInput.success) throw new Error('invalid payload');

    const response = await this.carModel.create(validInput.data as ICar);

    return response;
  }
}

export default CarService;
