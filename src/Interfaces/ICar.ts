import IAutomobile from './IVehicle';

export default interface ICar extends IAutomobile {
  doorsQty: number;
  seatsQty: number;
}