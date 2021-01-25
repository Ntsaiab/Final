const express = require('express');
const restaurantInfo = express.Router();
const RestaurantInfo = require('../models/restaurantinfo')
const jwt = require('jsonwebtoken');
const SECRET = 'thisisthebestlifeeversomanygoodthingsyettobedonewiththesehandsofmine'

// authorization middleware
const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(req.headers)
    if (authorization) {
        const token = authorization.split(' ')[1];
        console.log(token);
        try {
            const payload = await jwt.verify(token, SECRET )
            req.user = payload;
            next();// authorized function for permissions
        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        res.status(400).json(new Error('no token in header'))
    }
}

// INDEX
restaurantInfo.get('/', async (req, res) => {
    try{
        const foundRestaurantInfo = await RestaurantInfo.find({});
        res.status(200).json(foundRestaurantInfo);
    } catch (error) {
        res.status(400).json(error)
    }
})

// DELETE
restaurantInfo.delete('/:id', auth, async (req, res) => {
    try {
        const deleteRestaurantInfo = await RestaurantInfo.findByIdAndRemove(req.params.id);
        res.status(200).json(deleteRestaurantInfo);
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE
restaurantInfo.put('/:id', auth, async (req, res) => {
    try {
        const updateRestaurantInfo = await RestaurantInfo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updateRestaurantInfo);
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE
restaurantInfo.post('/', async (req, res) => {
    try {
        const createRestaurantInfo = await RestaurantInfo.create(req.body);
        res.status(200).json(createRestaurantInfo)
    } catch (error) {
        res.status(400).json(error)
    }
})

// SHOW
restaurantInfo.get('/:id', async (req, res) => {
    try {
        const showRestaurantInfo = await RestaurantInfo.findById(req.params.id);
        res.status(200).json(showRestaurantInfo)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = restaurantInfo;