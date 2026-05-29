import express from "express";
import morgan from "morgan";
import "dotenv/config";
import authRoutes from "./routes/auth.js";
import cookieParser from 'cookie-parser';


import migrate from "./migrate.js";
import router from "./routes/index.js";
import error from "./middlewares/errorHandler.js";
import sessionMiddleware from './config/session.js';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(sessionMiddleware);
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cookieParser(process.env.COOKIE_SECRET));

await migrate();

app.use(authRoutes);

app.use(router);

// console.log('authRoutes', typeof authRoutes);
// console.log('router:', typeof router);

app.use(error.notFound);
app.use(error.errors);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
});