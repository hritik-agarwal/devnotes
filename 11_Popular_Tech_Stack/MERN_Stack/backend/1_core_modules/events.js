// || EVENT EMITTERS
const EventEmitter = require("events");
const logEvents = require("../logging/logEvents");

// initialize object
const myEmitter = new EventEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log Event Testing");
}, 2000);
