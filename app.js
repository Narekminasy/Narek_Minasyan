import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "dotenv/config";
import authRoutes from "../routes/auth.js";

import migrate from "./migrate.js";
import router from "./routes/index.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

await migrate();

app.use(router);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
});