const { getWaterLevel } = require("../service");

const waterUsageController = async (req, res) => {
  const result = await getWaterLevel();
  res.send(result);
};

module.exports = {
  waterUsageController,
};
