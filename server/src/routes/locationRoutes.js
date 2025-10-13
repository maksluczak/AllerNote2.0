const express = require("express");
const locationController = require("../controllers/locationController");

const router = express.Router();

router.post("/", locationController.createLocation);
router.get("/:voivodeship", locationController.getLocationByVoivodeshipName);

module.exports = router;