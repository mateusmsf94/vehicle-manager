export default interface IVehicle {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
}