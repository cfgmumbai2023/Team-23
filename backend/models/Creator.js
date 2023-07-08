const mongoose = require('mongoose');
const {Schema } = mongoose;

const CreatorSchema = new Schema({
    name: String,
    subject: String,
    language: String,
});

const CreatorModel = mongoose.model('Creator', UserSchema);

module.exports = CreatorModel;