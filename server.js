// DEPENDENCIES


require("dotenv").config()
const { PORT, DATABASE_URL } = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const favesRouter = require('./controllers/faveReads')

// DATABASE CONNECTION
mongoose.connect(DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, {})
mongoose.set('strictQuery', true);

// Connection Events
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// MODELS
const LibrarySchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String},
  })

const Library = mongoose.model('Library' , LibrarySchema)

// MIDDLEWARE
app.use(cors()) 
app.use(morgan("dev")) 
app.use(express.json()) 
app.use(express.urlencoded({extended: false})); 
app.use("/faves", favesRouter)

// ROUTES -- IDUC

// test Route
app.get("/", (req, res) => {
    res.send("“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin")
})

// SEED
// app.get('/seed', (req, res) => {
//     Library.create(seed, (err, data) => {
//       res.redirect('/library')
//     })
//   })



INDEX
app.get('/library' , async (req,res) =>{
    try {
        res.status(200).json(await Library.find ({})) 
    } catch (error) {
        res.status(400).json(error)
    }
}) 

DELETE
 app.delete('./library:id' , async (req, res) => {
    try {
        res.status(200).json(await Library.findByIdAndDelete(req.params.id))
    } catch (error){
        res.status(400).json(error)
    }
 })
UPDATE
app.put('/library/:id', async (req, res) => {
    try {
        res.status(200).json(await Library.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch(error) {
        res.status(400).json(error)
    }

})
CREATE
app.post('/library' , async (req,res) => {
    try {
        // send all people
        res.status(200).json(await Library.create(req.body))
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
})


// LISTENER
app.listen(PORT, () => console.log(`listening to the sound of ${PORT} pages turning`))