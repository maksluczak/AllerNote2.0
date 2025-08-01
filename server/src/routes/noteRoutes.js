const express = require("express");
const noteController = require("../controllers/noteController");
const verifyJWT = require("../middlewares/verifyJWT");

const router = express.Router();
router.use(verifyJWT);

router.post('/', noteController.addNote);
router.get('/', noteController.getNoteByDate);

module.exports = router;