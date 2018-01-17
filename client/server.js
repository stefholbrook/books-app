const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static(__dirname +'public/index.html')) // serves the index.html
app.use(express.static(path.resolve(__dirname, 'public/index.html'))) // serves the index.html
app.listen(3000) // listens on port 3000 -> http://localhost:3000/
