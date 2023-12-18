const { DBConnect } = require("../index");
const { DataTypes } = require("sequelize");

const AbnormalitiesModel = DBConnect.define("abnormalities", {
  deviceName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "device_name",
  },
  info: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

module.exports = { AbnormalitiesModel };
