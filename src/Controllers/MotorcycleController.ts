import { Request, Response, NextFunction } from 'express';
import IMotocycle from '../Interfaces/IMotorcycle';
import MotocycleService from '../Services/MotocycleService';

class MotocycleController {
  private motocycleService: MotocycleService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motocycleService = new MotocycleService();
  }

  public async create(): Promise<void> {
    try {
      const motocycle: IMotocycle = this.req.body;
      const newMotocycle = await this.motocycleService.create(motocycle);
      this.res.status(201).json(newMotocycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotocycles(): Promise<void> {
    try {
      const motocycles = await this.motocycleService.getAllMotocycles();
      this.res.status(200).json(motocycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById(): Promise<void> {
    try {
      const { id } = this.req.params;
      const motocycle = await this.motocycleService.findById(id);
      this.res.status(200).json(motocycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update(): Promise<void> {
    try {
      const { id } = this.req.params;
      const updatedMotocycle: Partial<IMotocycle> = this.req.body;
      const motocycle = await this.motocycleService.update(id, updatedMotocycle);
      if (motocycle) {
        this.res.status(200).json(motocycle);
      } else {
        this.res.status(404).json({ error: 'Motocycle not found' });
      }
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotocycleController;
