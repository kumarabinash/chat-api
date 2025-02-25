const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
import { setupSocketHandlers } from "./handlers";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});


setupSocketHandlers(io);

httpServer.listen(3001, () => {
  console.log("Server is running on port 3001");
});
