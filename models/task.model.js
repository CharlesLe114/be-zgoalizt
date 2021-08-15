const db = require("../utils/db");
const moment = require("moment");

module.exports = {
  async getAll(username) {
    return await db("tasks").where({ username: username });
  },
  async add(task) {
    return await db("tasks").insert(task);
  },
  async completeTask(username, task_id) {
    return await db("tasks")
      .where({ username: username, task_id: task_id })
      .update({ is_done: true });
  },
  async deleteTask(username, task_id) {
    return await db("tasks")
      .where({ username: username, task_id: task_id })
      .del();
  },
  async getProductivity(username) {
    let doneTasks = await db("tasks").where({
      username: username,
      is_done: true,
    });
    let Tasks = await db("tasks").where({ username: username });
    let lenDoneTasks = doneTasks.length;
    let lenTasks = Tasks.length;
    return lenDoneTasks / lenTasks;
  },
  async getTodolist(username) {
    var now = new Date();
    const today = moment(now, "DD/MM/YYYY").format("YYYY-MM-DD");
    return await db("tasks").where({
      username: username,
      due_date: today,
      is_done: false,
    });
  },
};
