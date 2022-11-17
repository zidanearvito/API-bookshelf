const { nanoid } = require('nanoid')
const books = require('../books')

const createBooks = (req, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = req.payload

  const id = nanoid()

  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt

  if (!name || name === " " ) {
    const res = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    res.code(400)
    return res
  }
  if (readPage > pageCount) {
    const res = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    })
    res.code(400)
    return res
  }
  const isFinished = (pageCount, readPage) => {
    if (pageCount === readPage) {
      return true
    } else {
      return false
    }
  }
  const finished = isFinished(pageCount, readPage)

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt
  }

  books.push(newBook)

  const isSuccess = books.filter((book) => book.id === id).length !== 0

  if (isSuccess) {
    const res = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    res.code(201)
    console.log(req.payload.name)
    return res
  }
  const res = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan'
  })
  res.code(500)
  return res
}

module.exports = createBooks