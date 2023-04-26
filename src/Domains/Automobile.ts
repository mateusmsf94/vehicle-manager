export default class Automobile {
  id: string;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;

  constructor(
    id: string,
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }
}
