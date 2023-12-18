const { DBConnect } = require("../index");
const { DataTypes } = require("sequelize");

const CarbonFootprintModel = DBConnect.define("carbon_footprints", {
  footprintValue: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: "footprint_value",
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "createdAt",
  },
});

module.exports = { CarbonFootprintModel };
