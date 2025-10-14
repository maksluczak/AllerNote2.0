const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/:id", userController.getUserById);
router.put("/username/:id", userController.updateUsernameByUserId);
router.put("/password/:id", userController.updatePasswordByUserId);
router.get("/location", userController.getUserLocation);

module.exports = router;
