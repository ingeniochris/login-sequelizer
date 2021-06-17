import {Router} from 'express';
import { check } from 'express-validator';
import {getProducts} from '../controllers/ordersCtrl'

const router = Router();
// router "/ordes"
router.get('/', getProducts)

export default router;