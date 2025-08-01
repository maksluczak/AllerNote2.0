const logoutRoutes = require("./logoutRoutes");
const refreshRoutes = require("./refreshRoutes");
const noteRoutes = require("./noteRoutes");

const express = require("express");
const router = express.Router();

router.use('/logout', logoutRoutes);
router.use('/refresh', refreshRoutes);
router.use('/note', noteRoutes);

module.exports = router;