const express = require('express')

const router = express.Router()
const adminController = require('../controllers/adminController');

router.post("/", adminController.login);

module.exports = router
