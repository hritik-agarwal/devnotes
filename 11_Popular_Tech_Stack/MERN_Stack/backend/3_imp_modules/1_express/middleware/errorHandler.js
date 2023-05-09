const {logEvents} = require("./logHandler");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, 'errLog.log')
  res.status(500).send(err.message);
};

module.exports = errorHandler;
