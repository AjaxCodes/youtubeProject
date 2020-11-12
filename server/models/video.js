const mongoose = require('mongoose');
const Joi = require('joi');

const videoSchema = new mongoose.Schema({ 
    id: { type: String, required: true, minlength: 2, maxlength: 100 },
   
});


function validateVideo(video) {
    const schema = Joi.object({
        id: Joi.string().min(2).max(100).required(),
    
    });

return schema.validate(video); 
}
    //exports.Video = Video;
    exports.validate = validateVideo;
    //exports.videoSchema = videoSchema;


module.exports.videoSchema = videoSchema;
module.exports.Video = mongoose.model('Video', videoSchema);