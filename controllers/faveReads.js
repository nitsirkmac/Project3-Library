const express = require('express');
const bookRouter = express.Router();
const Faves = require('../models/favoriteReads.js');

// INDEX
bookRouter.get('/', (req, res) => {
    Faves.find({}, (error, allFaves) => {
        res.send("this is where we will see the Favorite Reads List")
    })
})

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

module.exports = bookRouter