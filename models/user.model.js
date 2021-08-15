const db = require("../utils/db");

module.exports = {
  async all() {
    return await db("users");
  },
  async add(user) {
    return await db("users").insert(user);
  },
  async get(user) {
    const rows = await db("users")
      .select("*")
      .where({ username: user.username, password: user.password });
    if (rows.length === 0) return null;
    return rows[0];
  },
};
