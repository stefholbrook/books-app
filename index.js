const express = require('express')
const bodyParser = require('body-parser')
const pool = require('./db')

const app = express()

app.get('/books', (req, res) => {
  pool.query('SELECT * FROM books', (err, res) => {
    if (err) console.log(err)

    console.log(res.rows)
  })
})

module.exports = app
