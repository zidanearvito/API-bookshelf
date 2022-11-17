const books = require("../books");

const updateBooks = (req, h) => {
  const { bookId } = req.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;
  const updatedAt = new Date().toISOString();
  const indexOf = books.findIndex((book) => book.id === bookId);
  const isFinished = (pageCount, readPage) => {
    if (pageCount === readPage) {
      return true;
    } else {
      return false;
    }
  };
  const finished = isFinished(pageCount, readPage);

  if (!name || name === " ") {
    const res = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
    res.code(400);
    return res;
  }

  if (readPage > pageCount) {
    const res = h.response({
      status: "fail",
      message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
    res.code(400);
    return res;
  }

  if (indexOf !== -1) {
    books[indexOf] = {
      ...books[indexOf],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt,
    };
    const res = h.response({
      status: "success",
      message: "Buku berhasil diperbarui",
    });
    res.code(200);
    return res;
  }
  
  const res = h.response({
    status: "fail",
    message: "Gagal memperbarui buku. Id tidak ditemukan",
  });
  res.code(404);
  return res;
};

module.exports = updateBooks;
