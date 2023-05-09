const path = require("path");
const bcrypt = require("bcrypt");
const fsPromises = require("fs").promises;

const usersData = {
  users: require("../model/user.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleNewUser = async (req, res) => {
  const {username, password} = req.body;

  // input validation
  if (!username || !password)
    return res
      .status(400)
      .json({message: "username and password are required"});

  // duplicacy checking
  const index = usersData.users.findIndex((item) => item.username === username);
  if (index != -1)
    return res.status(409).json({message: `User ${username} already exists!`});

  // creating new user
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      username,
      password: hashedPassword,
    };
    usersData.setUsers([...usersData.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "user.json"),
      JSON.stringify(usersData.users)
    );
    res.status(200).json({message: `User ${username} is created!`});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = {
  handleNewUser,
};
