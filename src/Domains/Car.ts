import Automobile from "./Automobile";

export default class Car extends Automobile {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    id: string,
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
    doorsQty: number,
    seatsQty: number
  ) {
    super(id, model, year, color, status, buyValue);
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}