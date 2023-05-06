const {v4: uuid} = require("uuid");

const data = [];

const getAllEmployees = (req, res) => {
  res.json(data);
};

const createNewEmployee = (req, res) => {
  const {firstname = null, lastname = null} = req.body;
  if (!firstname || !lastname) {
    return res.status(400).json({message: "First and Last names are required"});
  }
  const newEmployee = {id: uuid(), firstname, lastname};
  data.push(newEmployee);
  res.status(200).json(newEmployee);
};

const updateAnEmployee = (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({message: `Employee ID is required!`});
  }
  const index = data.findIndex((item) => item.id === req.body.id);
  if (index === -1) {
    return res
      .status(400)
      .json({message: `Employee ID ${req.body.id} not found`});
  }
  data[index] = {
    id: req.body.id,
    firstname: req.body.firstname || data[index].firstname,
    lastname: req.body.lastname || data[index].lastname,
  };
  res.status(200).json(data[index]);
};

const deleteAnEmployee = (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({message: `Employee ID is required!`});
  }
  const index = data.findIndex((item) => item.id === req.body.id);
  if (index === -1) {
    return res
      .status(400)
      .json({message: `Employee ID ${req.body.id} not found`});
  }
  data.splice(index, 1);
  res.status(200).json({message: `Employee ID ${req.body.id} deleted`});
};

const getEmployee = (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({message: `Employee ID is required!`});
  }
  const index = data.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res
      .status(400)
      .json({message: `Employee ID ${req.params.id} not found`});
  }
  res.status(200).json(data[index]);
};

module.exports = {
  getEmployee,
  getAllEmployees,
  createNewEmployee,
  updateAnEmployee,
  deleteAnEmployee,
};
