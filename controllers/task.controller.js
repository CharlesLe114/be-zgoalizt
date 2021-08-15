const express = require("express");
const router = express.Router();
const taskModel = require("../models/task.model");

router.get("/:username", async function (req, res) {
  try {
    username = req.params.username;
    tasks = await taskModel.getAll(username);
    res.status(200).send({ tasks: tasks });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.get("/:username/today", async function (req, res) {
  try {
    username = req.params.username;
    tasks = await taskModel.getTodolist(username);
    res.status(200).send({ tasks: tasks });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.get("/:username/productivity", async function (req, res) {
  try {
    username = req.params.username;
    let productivity = await taskModel.getProductivity(username);
    res.status(200).send({ productivity: productivity });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.post("/", async function (req, res) {
  try {
    task = req.body;
    await taskModel.add(task);
    res.status(200).send({ content: "Add Task Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.put("/:username/:task_id", async function (req, res) {
  try {
    username = req.params.username;
    task_id = req.params.task_id;
    tasks = await taskModel.completeTask(username, task_id);
    res.status(200).send("Update successful");
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.delete("/:username/:task_id", async function (req, res) {
  try {
    username = req.params.username;
    task_id = req.params.task_id;
    await taskModel.deleteTask(username, task_id);
    res.status(200).send({ content: "Delete Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

module.exports = router;
