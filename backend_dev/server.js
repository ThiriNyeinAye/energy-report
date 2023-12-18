const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv").config();
const fs = require("fs");
const routes = require("./routes");
const { DBConnect } = require("./database");
const { AbnormalitiesModel } = require("./database/models/abnormalitiesModel");

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use("/api/", routes);
DBConnect.sync().then(() => {
  var sql = fs.readFileSync("./dummy/dummy_data.sql", "utf8");
  DBConnect.query(sql);
});
// AbnormalitiesModel.find;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
