import { Router } from "express";
import validation from "../middlewares/validation.js";
import schema from "../middlewares/schemas/auth.schema.js";

import {
    register,
    login,
    logout,
    me
} from "../controllers/auth.js";

import authorization from "../middlewares/authorization.js";

const router = Router();

router.post("/auth/register", validation(schema.register, "body"), register);
router.post("/auth/login", validation(schema.login, "body"), login);
router.post("/auth/logout", authorization, logout);
router.get("/auth/me", authorization, me);

export default router;