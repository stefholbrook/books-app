const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM stores ORDER BY id ASC', (err, res) => {
    if (err) return next(err)

    response.json(res.rows)
  })
})

router.post('/add_store', (request, response, next) => {
  const { name, address, phone } = request.body

  pool.query(
    'INSERT INTO stores(name, address, phone) VALUES($1, $2, $3)',
    [name, address, phone],
    (err, res) => {
      if (err) return next(err)

      response.redirect('/api/stores')
    }
  )
})

module.exports = router
