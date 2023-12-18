const { getCarbonFootprint } = require("../service");

const carbonFootprintController = async (req, res) => {
  const result = await getCarbonFootprint();
  res.send(result);
};

module.exports = {
  carbonFootprintController,
};
