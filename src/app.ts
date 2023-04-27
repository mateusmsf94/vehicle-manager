import express, { json } from 'express';
import carRoute from './Routes/CarRoute';

const app = express();
app.use(json());
app.use('/cars', carRoute);

export default app;
