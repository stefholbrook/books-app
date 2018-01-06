const { Pool } = require('pg')

// configure pool with username, host, name of db, password, and port #
const pool = new Pool({
  username: 'books_user',
  host: 'localhost',
  database: 'books_app',
  password: 'books_password',
  port: 5432
})

// run query on db, callback func gets called once query is completed
pool.query('SELECT * FROM books', (err, res) => {
  if (err) console.log(err)

  console.log(res)
})
