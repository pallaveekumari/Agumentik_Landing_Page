const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    admin:{type:Boolean}
})

const UserModel = mongoose.model('user',UserSchema);

module.exports={
    UserModel
}