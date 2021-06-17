import {Router} from 'express';
import { check } from 'express-validator';
import { Login, verifyAccount} from '../controllers/authCtrl'

const router = Router();

//   Route  "/auth"
 router.post('/', Login)

// router.post('/', login)
// router.get("/verify/:token", verifyAccount);

// router.post("/login", login);

export default router;