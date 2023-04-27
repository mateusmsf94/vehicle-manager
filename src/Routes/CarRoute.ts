import { Router } from 'express';
import CarController from '../Controllers/CarCotroller';

const carRoute = Router();
const carController = new CarController();

carRoute.post('/', (req, res, next) => carController.create(req, res, next));
carRoute.get('/', (req, res, next) => carController.getAllCars(req, res, next));
carRoute.get('/:id', (req, res, next) => carController.findById(req, res, next));
carRoute.put('/:id', (req, res, next) => carController.update(req, res, next));

export default carRoute;
