import { Router } from "express";
import validation from "../middlewares/validation.js";
import schema from "../middlewares/schemas/auth.schema.js";
import authorization from "../middlewares/authorization.js";
import controllers from "../controllers/auth.js";


const router = Router();

router.post(
    "/register",
    validation(schema.register, "body"),
    controllers.register,
);

router.post(
    "/login",
    validation(schema.login, "body"),
    controllers.login,
);

router.post(
    "/logout",
    authorization,
    controllers.logout,
);

router.get(
    "/me",
    authorization,
    controllers.me
);


export default router;
