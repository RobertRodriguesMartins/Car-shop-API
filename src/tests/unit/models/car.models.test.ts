import * as sinon from "sinon";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import mongoose from "mongoose";
import { createPayload, createResponse } from "../mocks/car";
import Car from "../../../models/Car";
const { expect } = chai;

chai.use(chaiAsPromised);

const carModel = new Car();

describe("/models/Car", () => {
  before(sinon.restore);
  describe("create", async () => {
    it("should return ICar with _id", async () => {
      sinon.stub(mongoose.Model, "create").resolves(createResponse);

      await expect(carModel.create(createPayload)).to.eventually.be.deep.equals(
        createResponse
      );
    });
  });
});
