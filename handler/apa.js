// const nanoid = require('nanoid')
const books = require('../books')

const createBooks = (request, h) => {
  
  // const id = nanoid(16)
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const bookData = {
    id: request.payload.id,
    name: request.payload.name,
    year: request.payload.year,
    author: request.payload.author,
    summary: request.payload.summary,
    publisher: request.payload.publisher,
    pageCount: request.payload.pageCount,
    readPage: request.payload.readPage,
    reading: request.payload.reading,
    insertedAt: insertedAt,
    updatedAt: updatedAt
  }
  console.log(request.payload.id)
  console.log(request.payload.name)
  books.push(bookData)

  const isSuccess = books.filter((book) => book.id === id).length > 0

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
    })
    return response
  }
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan'
  })
  return response
}

module.exports = createBooks