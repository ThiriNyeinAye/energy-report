const express = require("express");
const router = express.Router();
const {
  abnormalitiesController,
} = require("../controller/abnormalitiesController");
const { waterUsageController } = require("../controller/waterUasgeController");
const {
  electricityController,
} = require("../controller/electricityController");
const {
  carbonFootprintController,
} = require("../controller/carbonFootprintController");
const {
  energyConsumptionController,
} = require("../controller/energyConsumptionController");
const { waterLevelController } = require("../controller/waterLevelController");
const { recycleController } = require("../controller/recycleController");

router.get("/abnormalities", abnormalitiesController);
router.get("/water-usage", waterUsageController);
router.get("/water-level", waterLevelController);
router.get("/electricity-usage", electricityController);
router.get("/carbon-footprint", carbonFootprintController);
router.get("/energy-consumption", energyConsumptionController);
router.get("/recycle-data", recycleController);

module.exports = router;
