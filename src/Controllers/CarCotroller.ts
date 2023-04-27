import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private carService: CarService;

  constructor() {
    this.carService = new CarService();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const car: ICar = req.body;
      const newCar = await this.carService.create(car);
      res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }

  public async getAllCars(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cars = await this.carService.getAllCars();
      res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const car = await this.carService.findById(id);
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ error: 'Car not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const updatedCar: Partial<ICar> = req.body;
      const car = await this.carService.update(id, updatedCar);
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ error: 'Car not found' });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;
