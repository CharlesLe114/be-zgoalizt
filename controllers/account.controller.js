const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
router.post("/login", async function (req, res) {
  try {
    user = req.body;
    userDB = await userModel.get(user);
    if (userDB === null) {
      throw "invalid user";
    }
    res
      .status(200)
      .send({ content: "Login Successful", username: user.username });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.post("/register", async function (req, res) {
  try {
    user = req.body;
    userDB = await userModel.add(user);
    if (userDB === null) {
      throw "invalid user";
    }
    res
      .status(201)
      .send({ content: "Register Successful", username: user.username });
  } catch {
    res.status(401).send({ content: "Register Unsuccessful" });
  }
});

module.exports = router;
