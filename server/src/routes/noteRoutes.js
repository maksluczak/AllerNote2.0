const express = require("express");
const noteController = require("../controllers/noteController");
const verifyJWT = require("../middlewares/verifyJWT");

const router = express.Router();
router.use(verifyJWT);

router.post('/:noteDate', noteController.addNote);
router.put('/:noteDate', noteController.updateNote);
router.get('/:noteDate', noteController.getNoteByDate);

module.exports = router;