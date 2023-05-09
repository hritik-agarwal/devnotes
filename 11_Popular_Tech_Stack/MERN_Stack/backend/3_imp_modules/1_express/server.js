// || MODULE IMPORTS
const cors = require("cors");
const path = require("path");
const express = require("express");

// || SERVER CREATE
const app = express();

// || MIDDLEWARES
// Log Middleware
app.use(require("./middleware/logHandler").logHandler);

// Cross Origin Resource Sharing (CORS) Middleware
app.use(cors(require("./middleware/corsHandler")));

// Parse JSON (application/json) Middleware
app.use(express.json());

// Parse Form Data (application/x-www-form-urlencoded) Middleware
app.use(express.urlencoded({extended: false}));

// Serving Static Files (img, css) Middleware
app.use("/", express.static(path.join(__dirname, "public")));

// Routers (w/o Authentication) Middleware
app.use("/", require("./routes/root"));
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));

// JWT Middleware
const verifyJWT = require("../../middleware/verifyJWT");

// Routers (with Authentication) Middleware
app.use("/employees", require("./routes/api/employees"));

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
app.use(require("./middleware/errorHandler"));

// || SERVER START
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
