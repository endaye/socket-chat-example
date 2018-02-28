const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);
var total_node = 0;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  total_node++;
  console.log(`user connected: ${socket.id}\ntotal nodes: ${total_node}`);
  io.emit('')
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    total_node--;
    console.log(`user disconnected: ${socket.id}\ntotal nodes: ${total_node}`);
  });
});

http.listen(13000, function () {
  console.log('listening on *: 13000');
});
