const Sequelize = require("sequelize");
const { AbnormalitiesModel } = require("./models/abnormalitiesModel");
const { EnergyConsumptionModel } = require("./models/energyConsumptionModel");
require("dotenv").config();

console.log("user >> ", process.env.DB_NAME, process.env.DB_USER);

const DBConnect = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      multipleStatements: true,
    },
  }
);

DBConnect.authenticate()
  .then(() => {
    console.log("Connection is successful.");
  })
  .catch((error) => {
    console.error("Connection is failed.", error);
  });

module.exports = {
  DBConnect,
};
