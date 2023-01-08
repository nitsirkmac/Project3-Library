// DEPENDENCIES

// SEED file

require("dotenv").config()
const { PORT = 4000 } = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

// DATABASE CONNECTION
// mongoose.connect(process.env.DATABASE_URL, {})

// const db = mongoose.connection;
// db.on("error", (err) => console.log(err.message + " is mongo not running?"));
// db.on("connected", () => console.log("mongo connected"));
// db.on("disconnected", () => console.log("mongo disconnected"));


// MIDDLEWARE
app.use(cors()) 
app.use(morgan("dev")) 
app.use(express.json()) 
app.use(express.urlencoded({extended: false})); 

// INDUCES

app.get("/", (req, res) => {
    res.send("“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin")
})

// SEED

// INDEX

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

// LISTENER
app.listen(PORT, () => console.log(`listening to the sound of ${PORT} pages turning`))

