const express = require('express')

const router = express.Router()
const studentController = require('../controllers/studentController');
const auth = require('../middlewares/auth');

router.get("/", auth, studentController.getAllStudent);
router.post("/", auth, studentController.createStudent);
router.patch("/:id", auth, studentController.updateStudent);
router.delete("/:id", auth, studentController.deleteStudent);

module.exports = router
