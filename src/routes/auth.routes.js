import {Router} from 'express';
import { check } from 'express-validator';
import {Authentic, UserAuth} from '../controllers/authCtrl';
import {AuthMiddleware} from '../middleware/Auth';

const router = Router();

router.post('/', 
Authentic
);

// Obtiene el usuario autenticado
router.get('/',
 AuthMiddleware,
 UserAuth
);

export default router;