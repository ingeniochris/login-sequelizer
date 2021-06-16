import {Router} from 'express';
import { check } from 'express-validator';
import {getProducts} from '../controllers/ordersCtrl'

const router = Router();

router.get('/orders', getProducts)

export default router;