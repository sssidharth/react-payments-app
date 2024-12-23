const { createServer } = require("json-server");
const server = createServer();
const router = require("./db.json");
const middlewares = require("json-server").defaults();

server.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Expires", "0");
    res.setHeader("Pragma", "no-cache");
    next();
  });

server.use(middlewares);
server.use(router);
module.exports = server;
