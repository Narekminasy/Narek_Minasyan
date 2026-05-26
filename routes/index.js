import { Router } from "express";
//import validation from "../middlewares/validation.js";
import schema from "../middlewares/schemas/auth.schema.js";
//import authController from "../controllers/auth.js";

const router = Router();

// register
router.post(
    '/auth/register',
    validation(schema.register, 'body'),
    authController.register
);

// login
router.post(
    '/auth/login',
    validation(schema.login, 'body'),
    authController.login
);

// logout
router.post('/auth/logout', authController.logout);

// me
router.get('/auth/me', authController.me);

export default router;