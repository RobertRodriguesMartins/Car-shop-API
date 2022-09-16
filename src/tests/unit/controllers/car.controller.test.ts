import * as sinon from "sinon";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import Car from "../../../models/Car";
import CarService from "../../../services/Car";
import CarController from "../../../controllers/Car";
import { createResponse } from "../mocks/car";
import { Request, Response } from "express";

const { expect } = chai;

chai.use(chaiAsPromised);

const carModel = new Car();
const carService = new CarService(carModel);
const carController = new CarController(carService);

describe("/controller/Car", () => {
  let req = {} as Request;
  let res = {} as Response;

  res.json = sinon.stub().returns(res);
  res.status = sinon.stub().returns(res);

  beforeEach(sinon.restore);
  describe("create", async () => {
    it("should return Response ICar with status 201", async () => {
      req.body = createResponse;
      const carCreateStub = sinon
        .stub(carService, "create")
        .resolves(createResponse);
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect(carCreateStub.calledWith(req.body)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(createResponse)).to.be
        .true;
    });
  });
});
