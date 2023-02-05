const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
   contact:{type:Number,required:true}
})

const LeadsModel = mongoose.model('lead',UserSchema);

module.exports={
    LeadsModel
}