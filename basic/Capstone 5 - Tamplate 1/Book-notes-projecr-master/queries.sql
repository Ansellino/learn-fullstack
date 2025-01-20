CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT,
  isbn integer,
  time_read date not null
);

-- One to One --
CREATE TABLE booknotes (
    id serial primary key,
  book_id INTEGER REFERENCES books(id) UNIQUE,
  quote TEXT,
  page integer
  
);
