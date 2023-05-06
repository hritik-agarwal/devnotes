const fs = require("fs");
const path = require("path");
const {v4: uuid} = require("uuid");
const {format} = require("date-fns");

const fsPromises = fs.promises;

const logEvents = async (message, logName) => {
  const logFile = path.join(__dirname, "..", "logs", logName);
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, '..', "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(logFile, logItem);
  } catch (err) {
    console.error(err);
  }
};

const logHandler = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.path}`, "reqLog.log");
  next();
};

module.exports = {logHandler, logEvents};
