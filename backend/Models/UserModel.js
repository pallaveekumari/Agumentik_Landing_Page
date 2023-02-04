const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const UserModel = mongoose.model('user',UserSchema);

module.exports={
    UserModel
}