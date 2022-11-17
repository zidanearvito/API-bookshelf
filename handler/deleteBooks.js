const books = require('../books')

const deleteBooks = (req, h) => {
  const { bookId } = req.params;

  const indexOf = books.findIndex((book) => book.id === bookId);

  if (indexOf !== -1) {
    books.splice(indexOf, 1);

    const res = h.response({
      status: "success",
      message: "Buku berhasil dihapus",
    });
    res.code(200);
    return res;
  }
  const res = h.response({
    status: "fail",
    message: "Buku gagal dihapus. Id tidak ditemukan",
  });
  res.code(404);
  return res;
};

module.exports = deleteBooks