let express = require('express');
let app = express(); 
let server = require('http').Server(app);
let io = require('socket.io')(server);
let path = require("path");
let Canvas = require('./src/canvas.js');
let canvas = new Canvas();

server.listen(80);

app.use("/", express.static(path.join(__dirname, "public")));

io.on('connection', (client) => {
	client.on('update', (data) => {
		client.emit('echo', data);
	})
})
