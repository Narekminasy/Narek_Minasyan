import HttpError from 'http-errors';

export const notFound = (req, res, next) => {
    next(new HttpError(404));
};

export const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
        errors: err.errors || {}
    });
};