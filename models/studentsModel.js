const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    class_: {
        type: Number,
        required: true
    },
    classIndex: {
        type: Number,
        required: true
    },
    goodActivity: {
        type: [String],
        required: true
    },
    badActivity: {
        type: [String],
        required: true
    }
}, {collection: 'collection'});

const studentModel = mongoose.model('Student', studentsSchema);

async function getStudents(grade, class_) {
    students = await studentModel.find({grade: grade, class_: class_}, {_id: 0, fullName: 1}).sort({classIndex: 1}).exec();

    return students;
}

async function getGoodActivity(studentName, grade, class_) {
    const goodActivity = await studentModel.find({fullName: studentName, grade: grade, class_: class_}, {_id: 0, goodActivity: 1}).exec();

    return goodActivity;
}

async function getBadActivity(studentName, grade, class_) {
    const badActivity = await studentModel.find({fullName: studentName, grade: grade, class_: class_}, {_id: 0, badActivity: 1}).exec();

    return badActivity;
}

async function updateActivity(studentName, grade, class_, activityType, activityDescription) {
    if (activityType == 'good') {
        await studentModel.updateOne({fullName: studentName, grade: grade, class_: class_}, {$push: {goodActivity: activityDescription}});
    } else {
        await studentModel.updateOne({fullName: studentName, grade: grade, class_: class_}, {$push: {badActivity: activityDescription}});
    }
}

module.exports = {
    getStudents,
    getGoodActivity,
    getBadActivity,
    updateActivity
}