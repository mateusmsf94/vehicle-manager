import { Router } from 'express';
import CarController from '../Controllers/CarCotroller';

const carRoute = Router();

carRoute.post('/', (req, res, next) => new CarController(req, res, next).create());
carRoute.get('/', (req, res, next) => new CarController(req, res, next).getAllCars());
carRoute.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
carRoute.put('/:id', (req, res, next) => new CarController(req, res, next).update());

export default carRoute;
