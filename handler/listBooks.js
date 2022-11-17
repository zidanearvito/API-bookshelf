const books = require("../books");

const listBooks = (req, h) => {
  const { name, reading, finished } = req.query;
  if (name) {
    const books = books.filter((book) => book.name.toLowerCase() === name.toLowerCase());
    const res = h.response({
      status: "success",
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (reading) {
    const books = books.filter((book) => Number(book.reading) === reading);
    const res = h.response({
      status: "success",
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (finished) {
    const books = books.filter((book) => Number(book.finished) === finished);
    const res = h.response({
      status: "success",
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (!name && !reading && !finished) {
    const res = h.response({
      status: "success",
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }
};

module.exports = listBooks;