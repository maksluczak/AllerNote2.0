const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get("/:id", userController.getUserById);
router.put("/username/:id", userController.updateUsernameByUserId);
router.put('/email/:id', userController.updateEmailByUserId);
router.put('/password/:id', userController.updatePasswordByUserId)

module.exports = router;