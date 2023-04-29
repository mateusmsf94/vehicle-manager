import { isValidObjectId } from 'mongoose';
import IMotocycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const notFound = 'Motorcycle not found';

class MotocycleService {
  public async create(motocycle: IMotocycle): Promise<IMotocycle> {
    const motocycleODM = new MotorcycleODM();
    const motocycleNew = await motocycleODM.create(motocycle);
    return {
      id: motocycleNew.id,
      model: motocycleNew.model,
      year: motocycleNew.year,
      color: motocycleNew.color,
      status: motocycleNew.status || false,
      buyValue: motocycleNew.buyValue,
      category: motocycleNew.category,
      engineCapacity: motocycleNew.engineCapacity,
    };
  }

  public async getAllMotocycles(): Promise<IMotocycle[]> {
    const motocycleODM = new MotorcycleODM();
    const motocycles = await motocycleODM.getAll();
    if (!motocycles) throw new Error(notFound);
    return motocycles;
  }

  public async findById(id: string): Promise<IMotocycle | null> {
    const motocycleODM = new MotorcycleODM();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    const motocycle = await motocycleODM.getById(id);

    if (!motocycle) {
      throw new Error(notFound);
    }

    return motocycle;
  }

  public async update(
    id: string,
    updatedMotocycle: Partial<IMotocycle>,
  ): Promise<IMotocycle | null> {
    const motocycleODM = new MotorcycleODM();

    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    const motocycle = await motocycleODM.update(id, updatedMotocycle);

    if (!motocycle) {
      throw new Error(notFound);
    }

    return motocycle;
  }
}

export default MotocycleService;
