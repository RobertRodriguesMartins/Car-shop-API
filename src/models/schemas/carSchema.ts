import { Schema } from 'mongoose';
import { ICar } from '../../interfaces';

const carSchema = new Schema<ICar>(
  {
    doorsQty: Number,
    seatsQty: Number,
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
  },
  { versionKey: false },
);

export default carSchema;
