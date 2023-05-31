const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

//import routes
const registerRoutes = require('./routes/user.route')

//Parses req body to json
app.use(express.json())

//setup routes
app.use('/register', registerRoutes)

//Connect to database
mongoose.connect(process.env.URI)
    .then(() => {
        //Listen to the port
        app.listen(process.env.PORT, () => {
            console.log(`Connected to the database and Listening in port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
