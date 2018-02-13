var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(13000, function () {
  console.log('listening on *: 13000');
});
