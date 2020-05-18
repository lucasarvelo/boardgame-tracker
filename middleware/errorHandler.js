module.exports = function errorHandler(error, req, res, next) {
  res.locals.error = error;
  const status = error.status || 500;
  res.status(status);
  res.send(error);
};
