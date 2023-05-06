// Module Imports
const cors = require("cors");
const path = require("path");
const express = require("express");

// Middleware Imports
const corsOption = require("./middleware/corsHandler");
const {logHandler} = require("./middleware/logHandler");
const errorHandler = require("./middleware/errorHandler");

// Router Imports
const router = require("./routes/root");
const employeeRouter = require("./routes/api/employees");

// || SERVER CREATE
const app = express();

// || MIDDLEWARES
// Log Handler
app.use(logHandler);
// Cross Origin Resource Sharing (CORS)
app.use(cors(corsOption));
// Handling json data (application/json)
app.use(express.json());
// Handling form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({extended: false}));
// Serving static files (img, css) at '/*'
app.use("/", express.static(path.join(__dirname, "public")));
// Root Router
app.use("/", router);
app.use("/employees", employeeRouter);

// || ROUTE
// 404 Route
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html"))
    res.sendFile(path.join(__dirname, "views", "404.html"));
  else if (req.accepts("json")) res.json({error: "404 Not Found"});
  else res.type("txt").send("404 Not Found");
});

// Error Handler
app.use(errorHandler);

// || SERVER START
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
