const { getEnergyConsumption } = require("../service");

const energyConsumptionController = async (req, res) => {
  const result = await getEnergyConsumption();
  res.send(result);
};

module.exports = {
  energyConsumptionController,
};
