const studentsModel = require('../models/studentsModel');

async function showMainPage(req, res, next) {
    try {
        res.render('startPage');
    } catch (error) {
        next(error);
    }
}

async function showClass(req, res, next) {
    try {
        const grade = Number(req.body.grade);
        const class_ = Number(req.body.class);
        const picked = false;
        
        const students = await studentsModel.getStudents(grade, class_);

        res.render('studentList', {students, grade, class_, picked});
    } catch (error) {
        next(error);
    }
}

async function showStudentActivity(req, res, next) {
    try {
        const studentName = req.body.studentName;
        const grade = req.body.grade;
        const class_ = req.body.class_;
        const activityType = req.body.activityType;

        if (activityType === 'good' || activityType === 'bad') {
            const activityDescription = req.body.activityDiscription;

            await studentsModel.updateActivity(studentName, grade, class_, activityType, activityDescription);
        }

        const goodActivity = await studentsModel.getGoodActivity(studentName, grade, class_);
        const badActivity = await studentsModel.getBadActivity(studentName, grade, class_);

        res.render('studentActivity', {studentName, grade, class_, goodActivity, badActivity});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    showMainPage,
    showClass,
    showStudentActivity
}