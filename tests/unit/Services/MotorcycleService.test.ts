import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';

describe('MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });

  const motorcycleSample: IMotorcycle = {
    id: '613eabf1c5e5d5f5e6633f3f',
    model: 'Yamaha YZF-R1',
    year: 2021,
    color: 'Blue',
    status: true,
    buyValue: 18000,
    category: 'Trail',
    engineCapacity: 998,
  };

  it('should create a new motorcycle', async function () {
    sinon.stub(MotorcycleODM.prototype, 'create').resolves(motorcycleSample);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.create(motorcycleSample);

    expect(result).to.deep.equal(motorcycleSample);
  });

  it('should get all motorcycles', async function () {
    sinon.stub(MotorcycleODM.prototype, 'getAll').resolves([motorcycleSample]);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.getAllMotocycles();

    expect(result).to.deep.equal([motorcycleSample]);
  });

  it('should find a motorcycle by its ID', async function () {
    sinon.stub(MotorcycleODM.prototype, 'getById').resolves(motorcycleSample);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findById(motorcycleSample.id as string);

    expect(result).to.deep.equal(motorcycleSample);
  });

  it('should throw an error when trying to find a motorcycle with an invalidID', async function () {
    const invalidId = 'INVALID_MONGO_ID';

    const motorcycleService = new MotorcycleService();
    try {
      await motorcycleService.findById(invalidId);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });

  it('should update a motorcycle', async function () {
    const updatedMotorcycle: Partial<IMotorcycle> = {
      color: 'Red',
    };

    const updatedMotorcycleSample = { ...motorcycleSample, ...updatedMotorcycle };

    sinon.stub(MotorcycleODM.prototype, 'update').resolves(updatedMotorcycleSample);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.update(motorcycleSample.id as string, updatedMotorcycle);

    expect(result).to.deep.equal(updatedMotorcycleSample);
  });

  it('should throw an error when trying to update motorcycle with an invalidID', async function () {
    const invalidId = 'INVALID_MONGO_ID';
    const updatedMotorcycle: Partial<IMotorcycle> = {
      color: 'Red',
    };

    const motorcycleService = new MotorcycleService();
    try {
      await motorcycleService.update(invalidId, updatedMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });
});
