import { Router } from 'express';
import Car from '../models/Car';
import CarService from '../services/Car';
import CarController from '../controllers/Car';

const model = new Car();
const carService = new CarService(model);
const carController = new CarController(carService);

const carRouter = Router();

carRouter
  .post('/cars', (req, res) => carController.create(req, res))
  .get('/cars', (req, res) => carController.read(req, res))
  .get('/cars/:id', (req, res) => carController.readOne(req, res));

export default carRouter;
