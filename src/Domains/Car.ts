import ICar from '../Interfaces/ICar';
import Automobile from './Automobile';

export default class Car extends Automobile {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carData: ICar) {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = carData;
    super(id, model, year, color, status || false, buyValue);
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}