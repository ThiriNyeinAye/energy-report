const { DBConnect } = require("../index");
const { DataTypes } = require("sequelize");

const RecycleModel = DBConnect.define("recycles", {
  recycle: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "recycle",
  },
  nonRecycle: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "non_recycle",
  },
});

module.exports = { RecycleModel };
