// Chaining Route Handlers
const fun1 = (req, res, next) => {
  // do something
  next();
};
const fun2 = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
};
app.get("^/$|/abc(.html)?", [fun1, fun2]);
