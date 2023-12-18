const { DBConnect } = require("../index");
const { DataTypes } = require("sequelize");

const EnergyConsumptionModel = DBConnect.define("energy-usages", {
  energy_meter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { EnergyConsumptionModel };
