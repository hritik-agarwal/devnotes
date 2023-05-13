require("dotenv").config();
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;

const usersData = {
  users: require("../model/user.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleLogin = async (req, res) => {
  const {username, password} = req.body;

  // input validation
  if (!username || !password)
    return res
      .status(400)
      .json({message: "username and password are required"});

  // duplicacy checking
  const index = usersData.users.findIndex((item) => item.username === username);
  if (index == -1)
    return res.status(409).json({message: `User ${username} not found!`});

  // creating new user
  try {
    const match = await bcrypt.compare(
      password,
      usersData.users[index].password
    );
    if (match) {
      // creating jwt tokents
      const accessToken = jwt.sign(
        {username: usersData.users[index].username},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "30s"}
      );
      const refreshToken = jwt.sign(
        {username: usersData.users[index].username},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: "1d"}
      );

      // updating users database
      const updatedUsers = usersData.users.map((item) => {
        if (item.username !== username) return item;
        const newItem = {...item, refreshToken};
        return newItem;
      });
      usersData.setUsers(updatedUsers);
      await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "user.json"),
        JSON.stringify(usersData.users)
      );

      // sending the token back
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({accessToken});
    } else {
      res.status(401).json({message: "Unauthorized"});
    }
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = {
  handleLogin,
};
