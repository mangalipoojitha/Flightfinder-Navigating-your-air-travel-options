
const notFound = (req, res, next) => {
  const error = new Error(`🔍 Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    msg: err.message || 'Something went wrong',
    stack: process.env.NODE_ENV === 'production' ? '🥞 Hidden' : err.stack
  });
};

module.exports = { notFound, errorHandler };
