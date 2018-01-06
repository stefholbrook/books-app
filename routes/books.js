const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (err, res) => {
    if (err) next(err)

    response.json(res.rows)
  })
})

module.exports = router
