import IAutomobile from './IVehicle';

export default interface IMotorcycle extends IAutomobile {
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}