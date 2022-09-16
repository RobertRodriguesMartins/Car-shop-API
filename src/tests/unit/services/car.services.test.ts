import * as sinon from "sinon";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import Car from "../../../models/Car";
import CarService from "../../../services/Car";
import { createPayload, createResponse } from "../mocks/car";
import carValidator from "../../../services/validators/car";
import CarError from "../../../errors/payload";
import { ZodError } from "zod";
import { ICar } from "../../../interfaces";

const { expect } = chai;

chai.use(chaiAsPromised);

const carModel = new Car();
const carService = new CarService(carModel);

describe("/services/Car", () => {
  beforeEach(sinon.restore);
  describe("create", async () => {
    it("should return ICar", async () => {
      sinon
        .stub(carValidator, "safeParse")
        .returns({ success: true, data: { ...createResponse } });
      sinon.stub(carModel, "create").resolves(createResponse);

      await expect(carService.create({})).to.eventually.be.deep.equals(
        createResponse
      );
    });
    it("should throw when payload does not match ICar", async () => {
      class S<T> extends ZodError<T> {
        constructor() {
          super([]);
        }
      }

      const a = new S<ICar>();
      a.addIssues([]);
      sinon
        .stub(carValidator, "safeParse")
        .returns({ success: false, error: a });
      sinon.stub(carModel, "create").resolves(createResponse);

      await expect(carService.create({})).to.eventually.rejectedWith(
        CarError.payload
      );
    });
  });
});
