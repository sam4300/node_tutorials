const { truncate } = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},{ timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
