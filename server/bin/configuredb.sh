#!/bin/bash

database="books_app"
echo "Configuring database: $database"

dropdb -U books_user books_app
createdb -U books_user books_app
# add data
psql -U books_user books_app < ./bin/sql/books.sql

echo "$database configured"
