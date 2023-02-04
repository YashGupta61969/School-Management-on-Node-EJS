const express = require('express')

const router = express.Router()
const teacherController = require('../controllers/teacherController');
const auth = require('../middlewares/auth');

router.get("/",auth, teacherController.getAllTeacher);
router.post("/",auth, teacherController.createTeacher);
router.patch("/:id",auth, teacherController.updateTeacher);
router.delete("/:id",auth, teacherController.deleteTeacher);

module.exports = router
