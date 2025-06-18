const mongoose = require('mongoose');

const categoryScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('category',categoryScheme);