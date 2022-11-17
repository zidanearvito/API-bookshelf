const Hapi = require('@hapi/hapi');
const createBooks = require('../handler/createBooks');
const listBooks = require('../handler/listBooks')

const init = async () => {

    const server = Hapi.server({
        port: 3100,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/books',
        handler: createBooks
    });

    server.route({
      method: "GET",
      path: "/books",
      handler: listBooks,
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();