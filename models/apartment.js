'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApartmentSchema = Schema({
    ubication: String,
    picture: String,
    price: Number,
    category: {type: String, enum: ['cuarto','departamento','casa']},
    description: String,
    phone: Number
})

module.exports = mongoose.model('Apartment', ApartmentSchema)