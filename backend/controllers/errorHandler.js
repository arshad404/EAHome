module.exports.errorHandler = (error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || `Internal server error`,
    },
  });
};

module.exports.defaultErrorHandler = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
};
