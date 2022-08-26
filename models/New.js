const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    content: String,
    author: String,
    archiveDate: Date,
    archived: Boolean
}, { timestamps: true });

const New = mongoose.model('New', NewSchema);

module.exports = New;