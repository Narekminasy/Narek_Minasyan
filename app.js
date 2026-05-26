import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import 'dotenv/config';

import migrate from './migrate.js';
import router from './routes/index.js';
//import errorHandler from './middlewares/errorHandler.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));   // <-- enables req.signedCookies

await migrate();

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});