const { Schema, model } = require('mongoose');

const restaurantInfo = Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    zip: {type: Number, required: true},
    culture: {type: String, required: true},
    dish: {type: String, required: true},
    ruleout: {type: String, required: true},
    img: {type: String}

})

module.exports = model('RestaurantInfo', restaurantInfo)