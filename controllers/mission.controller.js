const express = require("express");
const router = express.Router();
const missionModel = require("../models/mission.model");
// Get missions
router.get("/:username", async function (req, res) {
  try {
    username = req.params.username;
    missions = await missionModel.getMissions(username);
    res
      .status(200)
      .send({ content: "Get Sections Successful", missions: missions });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});
// Get messages
router.get("/:mission_id/:username/messages", async function (req, res) {
  try {
    username = req.params.username;
    mission_id = req.params.mission_id;
    messages = await missionModel.getMessages(mission_id);
    res
      .status(200)
      .send({ content: "Get Messages Successful", messages: messages });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});
// Send mission
router.post("/:username", async function (req, res) {
  try {
    mission = req.body;
    await missionModel.addMission(mission);
    res.status(200).send({ content: "Add Mission Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

// Send message
router.post("/:username/messages", async function (req, res) {
  try {
    message = req.body;
    await missionModel.addMessage(message);
    res.status(200).send({ content: "Add Message Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

//Put is_done
router.put("/:username/messages/:message_id", async function (req, res) {
  try {
    message_id = req.params.message_id;
    await missionModel.completeMessage(message_id);
    res.status(200).send({ content: "Get Is Done To True Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});
//Delete is_done
router.delete("/:username/messages/:message_id", async function (req, res) {
  try {
    message_id = req.params.message_id;
    await missionModel.unCompleteMessage(message_id);
    res.status(200).send({ content: "Set Is Done To False Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

module.exports = router;
