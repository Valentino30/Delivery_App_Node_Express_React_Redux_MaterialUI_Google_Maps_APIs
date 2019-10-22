const express = require("express");
const PickupPointsController = require("../controllers/pickupPoints");

const router = express.Router();

// Routes
router.get("/:countryCode/:zipCode", PickupPointsController.fetchPickupPoints);

module.exports = router;