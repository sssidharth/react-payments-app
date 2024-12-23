const { createServer } = require("json-server");
const server = createServer();
const router = require("./db.json");
const middlewares = require("json-server").defaults();

server.use(middlewares);
server.use(router);
module.exports = server;
