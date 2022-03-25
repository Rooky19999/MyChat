const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer,{
        cors: {
          origin: "*",
          method: ["GET", "POST"],
     },
});
const PORT = 7000;

//app.get("/", (req, res) => {
//    res.status(200).json({ name: "Server"});
//    });
io.on("connection", (socket) => {
 console.log(`${socket.id} connected`);

 socket.on("disconnect", () => {
      console.log(`${socket.id} disconnected`);
 });
});

httpServer.listen(PORT, ()=> {
console.log(`Server Listening on port ${PORT}`);
});