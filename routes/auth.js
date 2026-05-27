import { Router } from "express";
import validation from "../middlewares/validation.js";
import schema from "../middlewares/schemas/auth.schema.js";
import authorization from "../middlewares/authorization.js";

const router = Router();

router.post(
    "/auth/register",
    validation(schema.register, "body"),
);
router.post(
    "/auth/login",
    validation(schema.login, "body"),
);

router.post(
    "/auth/logout",
    authorization,
);

router.get(
    "/auth/me",
    authorization,
);

export default router;