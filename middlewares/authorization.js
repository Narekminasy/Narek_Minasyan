import jwt from "jsonwebtoken";
import HttpError from "http-errors";

export default (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header) return next(new HttpError(401));

        const token = header.replace("Bearer ", "");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded?.userId) return next(new HttpError(401));

        req.userId = decoded.userId;

        next();
    } catch (err) {
        next(new HttpError(401, "Invalid token"));
    }
};