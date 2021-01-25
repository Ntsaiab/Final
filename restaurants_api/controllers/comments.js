const express = require('express');
const commentSchema = express.Router();
const CommentSchema = require('../models/commentschema')

// INDEX
commentSchema.get('/', async (req, res) => {
    try{
        const foundCommentSchema = await CommentSchema.find({});
        res.status(200).json(foundCommentSchema);
    } catch (error) {
        res.status(400).jason(error)
    }
})

// DELETE
commentSchema.delete('/:id', async (req, res) => {
    try {
        const deleteCommentSchema = await CommentSchema.findByIdAndRemove(req.params.id);
        res.status(200).json(deleteCommentSchema);
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE
commentSchema.put('/:id', async (req, res) => {
    try {
        const updateCommentSchema = await CommentSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updateCommentSchema);
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE
commentSchema.post('/', async (req, res) => {
    try {
        const createCommentSchema = await CommentSchema.create(req.body);
        res.status(200).json(createCommentSchema)
    } catch (error) {
        res.status(400).json(error)
    }
})

// SHOW
commentSchema.get('/:id', async (req, res) => {
    try {
        const showCommentSchema = await CommentSchema.findById(req.params.id);
        res.status(200).json(showCommentSchema)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = commentSchema;