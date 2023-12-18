const { DBConnect } = require("../index");
const { DataTypes } = require("sequelize");

const WaterUsageModel = DBConnect.define("water_usages", {
  waterLevelValue: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: "water_level",
  },
  unit: {
    type: DataTypes.STRING,
  },
});

module.exports = { WaterUsageModel };
