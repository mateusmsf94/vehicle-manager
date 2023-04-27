export default interface IAutomobile {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  buyValue: number;
}