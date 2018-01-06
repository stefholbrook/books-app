const { Pool } = require('pg')
const dbConfig = require('../secrets/db-config')

// configure pool with username, host, name of db, password, and port #
const pool = new Pool(dbConfig)

module.exports = pool
