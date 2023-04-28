import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private carService: CarService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  public async create(): Promise<void> {
    try {
      const car: ICar = this.req.body;
      const newCar = await this.carService.create(car);
      this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars(): Promise<void> {
    try {
      const cars = await this.carService.getAllCars();
      this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById(): Promise<void> {
    try {
      const { id } = this.req.params;
      const car = await this.carService.findById(id);
      this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update(): Promise<void> {
    try {
      const { id } = this.req.params;
      const updatedCar: Partial<ICar> = this.req.body;
      const car = await this.carService.update(id, updatedCar);
      if (car) {
        this.res.status(200).json(car);
      } else {
        this.res.status(404).json({ error: 'Car not found' });
      }
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
