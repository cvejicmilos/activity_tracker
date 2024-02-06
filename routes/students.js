const express = require('express');

const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.post('/class', studentsController.showClass);
router.post('/studentActivity', studentsController.showStudentActivity);
router.get('/', studentsController.showMainPage);
router.post('/', studentsController.showMainPage);

module.exports = router;