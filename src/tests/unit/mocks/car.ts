import { ICar } from "../../../interfaces";

export const createPayload: ICar = {
  doorsQty: 3,
  seatsQty: 4,
  model: "aaaa",
  year: 1900,
  color: "aaa",
  buyValue: 33,
};

export const createResponse: ICar & { _id: string } = {
  ...createPayload,
  _id: "validId",
};
