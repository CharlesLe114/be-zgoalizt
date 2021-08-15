const express = require("express");
var cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(cors({ origin: "*" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/account/", require("./controllers/account.controller"));
app.use("/tasks/", require("./controllers/task.controller"));
app.use("/sections/", require("./controllers/section.controller"));
app.use("/missions/", require("./controllers/mission.controller"));

app.listen(port, () => {
  console.log(`BE app listening at http://localhost:${port}`);
});
