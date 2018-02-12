var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(13000, function () {
  console.log('listening on *:13000');
});
