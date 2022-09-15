import { ICar } from '../interfaces';
import MongoModel from './MongoModel';
import carSchema from './schemas/carSchema';

class Car extends MongoModel<ICar> {
  constructor() {
    super('cars', carSchema);
  }
}

export default Car;
