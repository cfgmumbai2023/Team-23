const mongoose = require('mongoose');
const {Schema } = mongoose;

const VideoSchema = new Schema({
    tag: String,
    std : Number, 
    format: String ,
    subject: String,
    language: String,
    favourites: Boolean,
});

const VideoModel = mongoose.model('Video', VideoSchema);

module.exports = VideoModel;