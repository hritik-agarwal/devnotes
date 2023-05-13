const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:password@localhost:27017");

mongoose.connection.once("open", () => {
  console.log("Mongodb connected");
});


