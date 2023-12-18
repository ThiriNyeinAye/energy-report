const { AbnormalitiesModel } = require("../database/models/abnormalitiesModel");
const {
  CarbonFootprintModel,
} = require("../database/models/carbonFootprintModel");
const { ElectricityModel } = require("../database/models/electricityModel");
const {
  EnergyConsumptionModel,
} = require("../database/models/energyConsumptionModel");
const { WaterUsageModel } = require("../database/models/waterUsageModel");
const { RecycleModel } = require("../database/models/recycleModel");
const { DBConnect } = require("../database");

const getEnergyConsumption = async () => {
  const energy_consumpion = await EnergyConsumptionModel.findAll();
  return energy_consumpion;
};

const getCurrentWaterLevel = async () => {
  const dateCurrent = new Date();
  const currentWaterLevel = await WaterUsageModel.findOne({
    where: DBConnect.where(
      DBConnect.fn("date", sequelize.col("createdAt")),
      "=",
      dateCurrent
    ),
  });
  if (currentWaterLevel === null) {
    return await WaterUsage.create({
      currentWaterLevel: 0,
      unit: "m",
    });
  }
  return currentWaterLevel;
};

const getElectricityConsumption = async () => {
  const electricityConsumption = await ElectricityModel.findAll();
  return electricityConsumption;
};

const getCarbonFootprint = async () => {
  const dateCurrent = "2023-06-17";
  const carbonFootprint = await CarbonFootprintModel.findOne({
    where: DBConnect.where(
      DBConnect.fn("date", sequelize.col("createdAt")),
      "=",
      dateCurrent
    ),
  });
  return carbonFootprint;
};

const getWaterLevel = async () => {
  const currentDate = "2023-12-16";
  const water_level = await WaterUsageModel.findAll({
    where: DBConnect.where(
      DBConnect.fn("date", sequelize.col("createdAt")),
      "=",
      currentDate
    ),
  });
  return water_level;
};

const getRecycleData = async () => {
  const recycleData = await RecycleModel.findAll();
  return recycleData;
};

const getAllAbnormalities = async () => {
  const allAbnormalitiesData = await AbnormalitiesModel.findAll();
  return allAbnormalitiesData;
};

module.exports = {
  getCurrentWaterLevel,
  getElectricityConsumption,
  getCarbonFootprint,
  getEnergyConsumption,
  getWaterLevel,
  getRecycleData,
  getAllAbnormalities,
};
