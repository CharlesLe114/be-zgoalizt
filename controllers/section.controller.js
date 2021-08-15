const express = require("express");
const router = express.Router();
const sectionModel = require("../models/section.model");

router.post("/", async function (req, res) {
  try {
    section = req.body;
    await sectionModel.add(section);
    res.status(200).send({ content: "Add Section Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.get("/:username", async function (req, res) {
  try {
    username = req.params.username;
    sections = await sectionModel.getAll(username);
    res
      .status(200)
      .send({ content: "Get Sections Successful", sections: sections });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

module.exports = router;
