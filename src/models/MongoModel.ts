import { Model, Schema, model } from 'mongoose';
import { IModel } from '../interfaces';

abstract class MongoModel<T> implements IModel<T> {
  protected myModel: Model<T>;
  constructor(nome: string, schema: Schema<T>) {
    this.myModel = model(nome, schema);
  }
  public async create(obj: T): Promise<T> {
    const response = await this.myModel.create({ ...obj });

    return response;
  }
  public async read(): Promise<T[]> {
    const response = await this.myModel.find();

    return response;
  }
  public async readOne(_id: string): Promise<T | null> {
    const response = await this.myModel.findOne({ _id });

    return response;
  }
  public async update(_id: string, obj: T): Promise<T | null> {
    const response = await this.myModel.findByIdAndUpdate(_id, {
      $set: { obj },
    });

    return response;
  }
  public async delete(_id: string): Promise<T | null> {
    const response = await this.myModel.findByIdAndDelete(_id);

    return response;
  }
}

export default MongoModel;
