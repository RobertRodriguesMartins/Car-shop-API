import CarErrorMessages, { CarError } from '../errors/carError';
import { ICar, IService, IModel } from '../interfaces';
import carValidator from './validators/car';
import mongoIdValidator from './validators/mongoId';

class CarService implements IService<ICar> {
  private carModel: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this.carModel = model;
  }
  public async create(obj: unknown): Promise<ICar> {
    const validInput = carValidator.safeParse(obj);

    if (!validInput.success) throw new CarError(CarErrorMessages.payload, 400);

    const response = await this.carModel.create(validInput.data as ICar);

    return response;
  }
  public async read(): Promise<ICar[]> {
    const response = await this.carModel.read();

    return response;
  }
  public async readOne(_id: unknown): Promise<ICar> {
    const validInput = mongoIdValidator.safeParse(_id);

    if (!validInput.success) throw new CarError(CarErrorMessages.invalidId, 400);

    const response = await this.carModel.readOne(validInput.data.id);

    if (!response) throw new CarError(CarErrorMessages.notFound, 404);

    return response;
  }
}

export default CarService;
