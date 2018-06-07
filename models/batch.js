const mongoose = require('mongoose');


const Batch= mongoose.model('batches',new mongoose.Schema({
    ID:{
        type:String,
        required:true,
    }
}))

module.exports=Batch;

module.exports=validateBatch;
