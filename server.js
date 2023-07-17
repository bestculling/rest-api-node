const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const productsRoute = require('./routes/productsRoute')

const app = express()
const port = 8081
const url = process.env.MONGODB_PASSWORD

// Connect to MongoDB
mongoose.connect(url, {})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(`Database connect error: ${err}`))

// Middleware
app.use(express.json())

// Routes
app.use('/api/products', productsRoute)

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})