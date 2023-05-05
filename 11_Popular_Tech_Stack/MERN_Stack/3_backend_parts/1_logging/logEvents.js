const fs = require("fs");
const path = require("path");
const {v4: uuid} = require("uuid");
const {format} = require("date-fns");

const fsPromises = fs.promises;

const logFile = path.join(__dirname, "logs", "eventLog.log");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(logFile, logItem);
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
