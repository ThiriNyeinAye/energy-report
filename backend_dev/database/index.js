const Sequelize = require("sequelize");
const { AbnormalitiesModel } = require("./models/abnormalitiesModel");
const { EnergyConsumptionModel } = require("./models/energyConsumptionModel");
require("dotenv").config();

console.log("user >> ", process.env.DB_NAME, process.env.DB_USER);

const DBConnect = new Sequelize("energy_report", "root", "root1234", {
  host: "127.0.0.1",
  dialect: "mysql",
  dialectOptions: {
    multipleStatements: true,
  },
});

// DBConnect.authenticate()
//   .then(() => {
//     console.log("Connection is successful.");
//     // EnergyConsumptionModel.sync().then(() => {
//     //   console.log("table is created");
//     // });
//     // AbnormalitiesModel.sync().then(() => {
//     //   console.log("table is created");
//     // });
//   })
//   .catch((error) => {
//     console.error("Connection is failed.", error);
//   });

module.exports = {
  DBConnect,
};
