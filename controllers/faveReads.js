const seed = require('../models/seed')
const express = require('express');
const bookRouter = express.Router();
const Faves = require('../models/favoriteReads.js');
bookRouter.use(express.json()) 
bookRouter.use(express.urlencoded({extended: false})); 




// SEED
bookRouter.get('/seed', (req, res) => {
    Faves.create(seed, (error, data) => {
        res.redirect("/faves")
    })
})

// INDEX
bookRouter.get('/', async (req, res) => {
    try {
        res.status(200).json(await Faves.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// NEW
bookRouter.get('/new', async (req, res) => {
    try {
        res.status(200).json(await Faves.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// DELETE
bookRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Faves.findByIdAndRemove(
            req.params.id,
            (foundFave) => {
                res.redirect('/faves')
            }
            ))
    } catch {
        res.status(400).json(error)
    }
})

// UPDATE
bookRouter.put('/:id', async (req, res) => {
    try {
        res.status(200).json(await Faves.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (updatedFave) => {
                res.redirect(`/faves/${req.params.id}`)
            }
        ))
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE
bookRouter.post('/', async (req, res) => {
    try {
        res.status(200).json(await Faves.create(
            req.body,
            (createdFave) => {
                res.redirect('/faves')
            }))
    } catch (error) {
        res.status(400).json(error)
    }
})

// EDIT
bookRouter.get('/:id/edit', async (req, res) => {
    try {
        res.status(200).json(await Faves.findById(
            req.params.id,
        ))
    } catch (error) {
        res.status(400).json(error)
    }
})

// SHOW
bookRouter.get('/:id', async (req, res) => {
    try {
        res.status(200).json(await Faves.findById(
            req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = bookRouter