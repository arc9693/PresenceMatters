const mongoose = require('mongoose');

const subSchema =new mongoose.Schema({
    Teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teachers'
    },

    Attendance: {
        type:Number,
        min:0
    },
    TotalDays: {
        type:Number,
        min:0
    }
})


const student = new mongoose.Schema({
    rollNo:{
        type:Number,
        required:true
    },
    batch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'batches',
        required:true
    },
    Subjects:[subSchema]

})

const Student= mongoose.model('students',student);

