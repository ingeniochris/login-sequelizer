import config from "./config/appConfig";
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';


import orderRoutes from './routes/orders.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
const app = express();



//config
app.set('port', config.port);


//middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);







export default app;