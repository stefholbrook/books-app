const { Router } = require('express')

const books = require('./books')
const stores = require('./stores')

const router = Router()

router.use('/api/books', books)
router.use('/api/stores', stores)

module.exports = router
