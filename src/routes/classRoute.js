const express = require('express')

const router = express.Router()
const classController = require('../controllers/classController');
const auth = require('../middlewares/auth');

router.get("/",auth, classController.getAllClass);
router.post("/",auth, classController.createClass);
router.patch("/:id",auth, classController.updateClass);
router.delete("/:id",auth, classController.deleteClass);

module.exports = router
