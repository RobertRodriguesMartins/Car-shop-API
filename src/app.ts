import express from 'express';
import 'express-async-errors';
import errorMD from './middlewares/errorMD';
import carRouter from './Routes/Car';

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(errorMD);

export default app;
