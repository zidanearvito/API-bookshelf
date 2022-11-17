const books = require("../books");

const detailBooks = (req, h) => {
  const { bookId } = req.params;

  const data = books.filter((book) => book.id === bookId)[0];
  if (data !== undefined) {
    return {
      status: "success",
      data: {
        data,
      },
    };
  }
  const res = h.response({
    status: "fail",
    message: "Buku tidak ditemukan",
  });
  res.code(404);
  return res;
};

module.exports = detailBooks;