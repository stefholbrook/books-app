const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (err, res) => {
    if (err) return next(err)

    response.json(res.rows)
  })
})

router.post('/add_book', (request, response, next) => {
  const { title, author, pages, price } = request.body
  pool.query(
    'INSERT INTO books(title, author, pages, price) VALUES($1, $2, $3, $4)',
    [title, author, pages, price],
    (err, res) => {
      if (err) return next(err)

      response.redirect('/api/books')
    }
  )
})

module.exports = router
