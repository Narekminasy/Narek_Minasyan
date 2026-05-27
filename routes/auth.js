import { Router } from "express";
import validation from "../middlewares/validation.js";
import schema from "../middlewares/schemas/auth.schema.js";
import authorization from "../middlewares/authorization.js";

const router = Router();

router.post(
    "/register",
    validation(schema.register, "body"),
);

router.post(
    "/login",
    validation(schema.login, "body"),
);

router.post(
    "/logout",
    authorization,
);

router.get(
    "/me",
    authorization,
);

export default router;
