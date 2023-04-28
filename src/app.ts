import express, { json } from 'express';
import carRoute from './Routes/CarRoute';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();
app.use(json());
app.use('/cars', carRoute);
app.use(ErrorHandler.handle);

export default app;
