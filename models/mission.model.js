const db = require("../utils/db");
module.exports = {
  async getMissions(username) {
    return await db("missions").select("*").where({ username });
  },
  async getMessages(mission_id) {
    return await db("messages").select("*").where({ mission_id });
  },
  async addMission(mission) {
    return await db("missions").insert(mission);
  },
  async addMessage(message) {
    return await db("messages").insert(message);
  },
  async completeMessage(message_id) {
    return await db("messages").where({ message_id }).update({
      is_done: true,
    });
  },
  async unCompleteMessage(message_id) {
    return await db("messages").where({ message_id }).update({
      is_done: false,
    });
  },
};
