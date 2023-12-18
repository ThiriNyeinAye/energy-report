const { getRecycleData } = require("../service");

const recycleController = async (req, res) => {
  const result = await getRecycleData();
  res.send(result);
};

module.exports = {
  recycleController,
};
