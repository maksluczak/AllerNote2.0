const logoutRoutes = require("./logoutRoutes");
const refreshRoutes = require("./refreshRoutes");
const noteRoutes = require("./noteRoutes");
const userRoutes = require("./userRoutes");

const express = require("express");
const router = express.Router();

router.use('/logout', logoutRoutes);
router.use('/refresh', refreshRoutes);
router.use('/note', noteRoutes);
router.use('/user', userRoutes);

module.exports = router;