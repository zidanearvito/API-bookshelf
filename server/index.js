const Hapi = require("@hapi/hapi");
const createBooks = require("../handler/createBooks");
const deleteBooks = require("../handler/deleteBooks");
const detailBooks = require("../handler/detailBooks");
const listBooks = require("../handler/listBooks");
const updateBooks = require("../handler/updateBooks");

const init = async () => {
  const server = Hapi.server({
    port: 3100,
    host: "localhost",
  });

  server.route({
    method: "POST",
    path: "/books",
    handler: createBooks,
  });

  server.route({
    method: "GET",
    path: "/books",
    handler: listBooks,
  });

  server.route({
    method: "GET",
    path: "/books/{bookId}",
    handler: detailBooks,
  });

  server.route({
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBooks,
  });

  server.route({
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBooks,
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
