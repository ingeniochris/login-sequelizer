import {Router} from 'express';
import {check} from 'express-validator';


import {CreateUser} from '../controllers/usersCtrl';


const router = Router();

// route  "/users"
router.post('/', 
[
    check('email', 'Agrega un email válido').isEmail(),
    check('fullname', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6}),
    check('confirmPassword', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
],
CreateUser)





export default router;