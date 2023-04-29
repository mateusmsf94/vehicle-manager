import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motocycleRoute = Router();

motocycleRoute.post('/', (req, res, next) =>
  new MotorcycleController(req, res, next).create());
motocycleRoute.get('/', (req, res, next) =>
  new MotorcycleController(req, res, next).getAllMotocycles());
motocycleRoute.get('/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).findById());
motocycleRoute.put('/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).update());

export default motocycleRoute;
