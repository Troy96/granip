const mongoose = require('mongoose');

const ImageRepoSchema = new mongoose.Schema({
    link: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
});

const ImageRepo = mongoose.model('ImageRepo', ImageRepoSchema, 'ImageRepo');

module.exports = {
    ImageRepo
}

