const server = require('http').createServer();

const io = require('socket.io')(server, {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

io.on('connection', function(socket){
    console.log('socket connected', socket.id)
    socket.on('log',function(msg){
        if(msg.level != 'error') {
            console.log(msg.message)
        }else {
            console.error(msg.message)
        }
    })
})

server.listen(8749);