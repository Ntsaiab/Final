const { Schema, model } = require('mongoose');

const commentSchema= Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    ideas: {type: String, required: true}
})

module.exports = model('CommentSchema', commentSchema)