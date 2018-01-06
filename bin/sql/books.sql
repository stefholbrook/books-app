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
