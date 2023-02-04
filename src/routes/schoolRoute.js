const express = require('express')

const router = express.Router()
const schoolController = require('../controllers/schoolController');
const auth = require('../middlewares/auth');

router.get("/",auth, schoolController.getAllSchool);
router.post("/",auth, schoolController.createSchool);
router.patch("/:id",auth, schoolController.updateSchool);
router.delete("/:id",auth, schoolController.deleteSchool);

module.exports = router
