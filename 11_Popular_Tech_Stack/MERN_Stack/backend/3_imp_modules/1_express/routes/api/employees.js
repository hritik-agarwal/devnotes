const express = require("express");
const router = express.Router();

const employeeControllers = require("../../controllers/employeeControllers");

router
  .route("/")
  .get(employeeControllers.getAllEmployees)
  .post(employeeControllers.createNewEmployee)
  .put(employeeControllers.updateAnEmployee)
  .delete(employeeControllers.deleteAnEmployee);

router.route("/:id").get(employeeControllers.getEmployee);

module.exports = router;
