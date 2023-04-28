import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const notFound = 'Car not found';

class CarService {
  public async create(car: ICar): Promise<ICar> {
    const carODM = new CarODM();
    const carNew = await carODM.create(car);
    return {
      id: carNew.id,
      model: carNew.model,
      year: carNew.year,
      color: carNew.color,
      status: carNew.status || false,
      buyValue: carNew.buyValue,
      doorsQty: carNew.doorsQty,
      seatsQty: carNew.seatsQty,
    };
  }

  public async getAllCars(): Promise<ICar[]> {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    if (!cars) throw new Error(notFound);
    return cars;
  }

  public async findById(id: string): Promise<ICar | null> {
    const carODM = new CarODM();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    const car = await carODM.getById(id);

    if (!car) {
      throw new Error(notFound);
    }

    return car;
  }

  public async update(id: string, updatedCar: Partial<ICar>): Promise<ICar | null> {
    const carODM = new CarODM();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    const car = await carODM.update(id, updatedCar);

    if (!car) {
      throw new Error(notFound);
    }

    return car;
  }
}

export default CarService;
