import { Router } from "express";
import authRoutes from "../routes/auth.js";
import customerRoutes from "../routes/customers.js";
// import namesRoutes from "../routes/names.js";
import personsRoutes from "../routes/persons.js";

const router = Router();

router.use('/auth', authRoutes);
router.use('/customers', customerRoutes);
router.use('/persons', personsRoutes);
// router.use('/names', namesRoutes);

export default router;
