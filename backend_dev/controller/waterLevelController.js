const { getCurrentWaterLevel } = require("../service");

const waterLevelController = async (req, res) => {
  const result = await getCurrentWaterLevel();
  res.send(result);
};

module.exports = {
  waterLevelController,
};
