const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const StudentSchema= new Schema({
    rollNo:{ type:Number },
    name:{ type:String },
    fatherName:{ type:String },
    adharCardNo:{ type:Number},
     mobileNo: { type: String }
})

module.exports = mongoose.model('Student',StudentSchema)