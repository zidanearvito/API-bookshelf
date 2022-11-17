const books = require('../books')

const listBooks = (req, h) => {
    // if ( data !== undefined ) {
        const res = h.response({
            status: 'success',
            data: {
                books: books.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                }))
            }
        })
    // }
    return res
}

module.exports = listBooks