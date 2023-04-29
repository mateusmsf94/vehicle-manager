import IMotocycle from '../Interfaces/IMotorcycle';
import Automobile from './Vehicle';

export default class Motorcycle extends Automobile {
  private category: string;
  private engineCapacity: number;

  constructor(motocycleData: IMotocycle) {
    const { id, model, year, color, status, buyValue, category, engineCapacity } = motocycleData;
    super(id, model, year, color, status || false, buyValue);
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}