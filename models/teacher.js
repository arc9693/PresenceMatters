const mongoose = require('mongoose');




const teacher = new mongoose.Schema({
    subject:{
        type:String,
        reuired:true
    },
    batches:[{type:mongoose.Schema.Types.ObjectId,ref:'batches'}]
})

const Teacher= mongoose.model('teachers',teacher);

