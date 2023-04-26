import Automobile from "./Automobile";

export default class Car extends Automobile {
  doorsQty: number;
  seatQty: number;

  constructor(
    id: string,
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
    doorsQty: number,
    seatQty: number
  ) {
    super(id, model, year, color, status, buyValue);
    this.doorsQty = doorsQty;
    this.seatQty = seatQty;
  }
}