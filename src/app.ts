import express, { json } from 'express';
import carRoute from './Routes/CarRoute';
import ErrorHandler from './middlewares/ErrorHandler';
import motocycleRoute from './Routes/MotocycleRoute';

const app = express();
app.use(json());
app.use('/cars', carRoute);
app.use('/motorcycles', motocycleRoute);
app.use(ErrorHandler.handle);

export default app;
