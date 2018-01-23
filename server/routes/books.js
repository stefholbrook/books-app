const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (err, res) => {
    if (err) return next(err)

    response.json(res.rows)
  })
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  pool.query('SELECT * FROM books WHERE id=$1', [id], (err, res) => {
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

router.put('/:id', (request, response, next) => {
  const { id } = request.params
  const keys = ['title', 'author', 'pages', 'price']
  const fields = []

  keys.map((key) => {
    if (request.body[key]) fields.push(key)
  })

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE books SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err)

        if (!index.length) return response.redirect(303, '/api/books')
      }
    )
  })
})

router.delete('/:id', (request, response, next) => {
  const { id } = request.params

  pool.query('DELETE FROM books WHERE id=$1', [id], (err, res) => {
    if (err) next(err)

    response.redirect(303, '/api/books')
  })
})


module.exports = router
