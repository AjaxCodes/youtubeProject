const mongoose = require('mongoose');
const User = mongoose.model('User', userSchema);
const Joi = require('joi');

const userSchema = new mongoose.Schema({ 
    name: { type: String, required: true, minlength: 5, maxlength: 20 },
    password:{ type: String, required: true, minlength: 8, maxlength: 12 },
    
});
const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
    name: Joi.string().min(5).max(20).required(),
    password: Joi.string().required(true),
   });
    return schema.validate(user); 
}
    exports.User = User;
    exports.validate = validateUser;
    exports.userSchema = userSchema;


module.exports = user;
