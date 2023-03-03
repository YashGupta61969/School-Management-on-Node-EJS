const express = require('express')
const auth = require('../middlewares/auth');

const router = express.Router()
const adminController = require('../controllers/adminController');
const classController = require('../controllers/classController');
const schoolController = require('../controllers/schoolController');
const studentController = require('../controllers/studentController');
const subjectController = require('../controllers/subjectController');
const teacherController = require('../controllers/teacherController');

// Admin Route
router.post("/", adminController.login);
router.get('/', adminController.loginPage)

// Class Route
router.get("/class",  classController.getAllClass);
router.post("/class",  classController.createClass);
router.patch("/class/:id",  classController.updateClass);
router.delete("/class/:id",  classController.deleteClass);

// School Route
router.get("/school", schoolController.getAllSchool);
router.post("/school",  schoolController.createSchool);
router.patch("/school/:id",  schoolController.updateSchool);
router.delete("/school/:id",  schoolController.deleteSchool);

// Student Route
router.get("/student",  studentController.getAllStudent);
router.post("/student",  studentController.createStudent);
router.patch("/student/:id",  studentController.updateStudent);
router.delete("/student/:id",  studentController.deleteStudent);

// Subject Route
router.get("/subject",  subjectController.getAllSubject);
router.post("/subject",  subjectController.createSubject);
router.patch("/subject/:id",  subjectController.updateSubject);
router.delete("/subject/:id",  subjectController.deleteSubject);

// Teacher Route
router.get("/teacher",  teacherController.getAllTeacher);
router.post("/teacher",  teacherController.createTeacher);
router.patch("/teacher/:id",  teacherController.updateTeacher);
router.delete("/teacher/:id",  teacherController.deleteTeacher);

module.exports = router
