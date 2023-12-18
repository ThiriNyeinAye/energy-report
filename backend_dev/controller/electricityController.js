const { getElectricityConsumption } = require("../service");

const electricityController = async (req, res) => {
  const result = await getElectricityConsumption();
  res.send(result);
};

module.exports = {
  electricityController,
};
