const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
import { setupSocketHandlers } from "./handlers";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);



setupSocketHandlers(io);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
