CREATE TABLE books(
  -- serial is a number that auto increments as data is inserted
  id serial,
  title character varying(50),
  author character varying(50),
  pages int,
  price money
);

CREATE TABLE stores(
  id serial,
  name character varying(50),
  address character varying(50),
  phone int
);

INSERT INTO books(title, author, pages, price)
VALUES
('American Gods', 'Neil Gaiman', 300, 8.99),
('1984', 'George Orwell', 150, 10.99),
('Do Androids Dream of Electric Sheep', 'Phillip K. Dick', 320, 8);

INSERT INTO stores(name, address, phone)
VALUES
('Book and Nobles', '1234 Samwise St.', 1234567);
