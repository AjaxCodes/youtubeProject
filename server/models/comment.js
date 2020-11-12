const mongoose = require('mongoose');
const Joi = require('joi');

const commentSchema = new mongoose.Schema({ 
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    discription: { type: String, required: true },
    
});


function validateComment(comment) {
    const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().required(),
    });

return schema.validate(comment); 
}
    //exports.Video = Video;
    exports.validate = validateComment;
    //exports.videoSchema = videoSchema;


module.exports.commentSchema = commentSchema;
module.exports.Comment = mongoose.model('Comment', commentSchema);