const mongoose = require('mongoose');
const Video = mongoose.model('Video', videoSchema);
const Joi = require('joi');

const videoSchema = new mongoose.Schema({ 
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    discription: { type: String, required: true },
    category: { type: String, required: true, minlength: 5, maxlength: 50 },
    dateModified: { type: Date, default: Date.now },
});
const Video = mongoose.model('Video', videoSchema);

function validateVideo(video) {
    const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().required(),
    category: Joi.string().min(5).max(50).required(),
    });

return schema.validate(video); 
}
    exports.Video = Video;
    exports.validate = validateVideo;
    exports.videoSchema = videoSchema;


module.exports = video;