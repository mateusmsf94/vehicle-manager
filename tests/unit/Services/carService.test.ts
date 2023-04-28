import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import CarODM from '../../../src/Models/CarODM';

describe('CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  const carSample: ICar = {
    id: '613eabf1c5e5d5f5e6633f3e',
    model: 'Tesla Model S',
    year: 2021,
    color: 'Red',
    status: true,
    buyValue: 80000,
    doorsQty: 4,
    seatsQty: 5,
  };

  it('should create a new car', async function () {
    sinon.stub(CarODM.prototype, 'create').resolves(carSample);

    const carService = new CarService();
    const result = await carService.create(carSample);

    expect(result).to.deep.equal(carSample);
  });

  it('should get all cars', async function () {
    sinon.stub(CarODM.prototype, 'getAll').resolves([carSample]);

    const carService = new CarService();
    const result = await carService.getAllCars();

    expect(result).to.deep.equal([carSample]);
  });

  it('should find a car by its ID', async function () {
    sinon.stub(CarODM.prototype, 'getById').resolves(carSample);

    const carService = new CarService();
    const result = await carService.findById(carSample.id as string);

    expect(result).to.deep.equal(carSample);
  });

  it('should throw an error when trying to find a car with an invalid ID', async function () {
    const invalidId = 'INVALID_MONGO_ID';

    const carService = new CarService();
    try {
      await carService.findById(invalidId);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });

  it('should update a car', async function () {
    const updatedCar: Partial<ICar> = {
      color: 'Blue',
    };

    const updatedCarSample = { ...carSample, ...updatedCar };

    sinon.stub(CarODM.prototype, 'update').resolves(updatedCarSample);

    const carService = new CarService();
    const result = await carService.update(carSample.id as string, updatedCar);

    expect(result).to.deep.equal(updatedCarSample);
  });

  it('should throw an error when trying to update a car with an invalid ID', async function () {
    const invalidId = 'INVALID_MONGO_ID';
    const updatedCar: Partial<ICar> = {
      color: 'Blue',
    };

    const carService = new CarService();
    try {
      await carService.update(invalidId, updatedCar);
    } catch (error) {
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });
});
