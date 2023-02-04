const express = require('express')

const router = express.Router()
const subjectController = require('../controllers/subjectController');
const auth = require('../middlewares/auth');

router.get("/",auth, subjectController.getAllSubject);
router.post("/",auth, subjectController.createSubject);
router.patch("/:id",auth, subjectController.updateSubject);
router.delete("/:id",auth, subjectController.deleteSubject);

module.exports = router
