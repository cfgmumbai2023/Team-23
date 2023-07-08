const mongoose = require('mongoose');
const {Schema } = mongoose;

const LearnerSchema = new Schema({
    name: String,
    uidse: String,
    std: Number,
    school: String
});

const LearnerModel = mongoose.model('Learner', LearnerSchema);

module.exports = LearnerModel;