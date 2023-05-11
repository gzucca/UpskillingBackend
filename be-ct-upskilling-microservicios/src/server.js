const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  })
);

server.use(require("./routes"));

module.exports = server;
