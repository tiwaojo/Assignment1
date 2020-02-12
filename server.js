// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000);
app.use('/static', express.static(__dirname + 'public'));
app.use(express.static('public')); // Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});
// app.use(express.static("images"));

// Starts the server.
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});


// Add the WebSocket handlers
io.on('connection', function(socket) {
    socket.on("selectOpt1", function(data) {
        io.sockets.emit("selectOpt1", data);
        // fn(data + "selected");
    });
    socket.on("selectOpt2", function(data) {
        io.sockets.emit("selectOpt2", data);
        // fn(data + "selected");
    });
    socket.on("selectOpt3", function(data) {
        io.sockets.emit("selectOpt3", data);
        // fn(data + "selected");
    });

    socket.on("name", function(name, fn) {
        fn(name + ' is playing ');
    });
});

var players = {};
io.on('connection', function(socket) {
    socket.on('new player', function() {

        players[socket.id] = {
            // alert("this");
            rock: null,
            paper: null,
            scissors: null

        };
        // console.log(players)
    });
    socket.on('play', function(data) {
        var player = players[socket.id] || {};
        if (data.rock) {
            player.rock = true;
        }
        if (data.paper) {
            player.y -= 5;
        }
        if (data.scissors) {
            player.x += 5;
        }

    });
});
setInterval(function() {
    io.sockets.emit('state', players);
}, 1000 / 60);


// 
// app.get('/', function(req, res) {
//     res.send(document.getElementById("player").value)
// });

// socket.emit('new player');
// setInterval(function() {
//     socket.emit('movement', movement);
// }, 1000 / 60);





//     // The selected card switch-case. If the user selects either of the cases ...
//     // function selectCard() {
//     //     var selected = document.getElementById();
//     //     switch (document.getElementById("")) {
//     //         case "rock" && "rock": // A
//     //             alert("Rock");
//     //             //     break;
//     //             // case "paper": // W
//     //             //     alert("Paper");
//     //             //     break;
//     //             // case "scissors": // D
//     //             //     alert("Scissors");
//     //     }

//     // var players = {};
//     // io.on('connection', function(socket) {
//     //             socket.on('new player', function() {
//     //                     players[socket.id] = {

//     //                     });
//     //                      socket.on('movement', function(data) {
//     //                     var player = players[socket.id] {};

//     //                 });
//     //             });
//     // setInterval(function() {
//     //     io.sockets.emit('state', players);
//     // }, 1000 / 60);


//     // To listen for messages w/ specific names. Use event handler as below
//     // socket.on('name', function(data) {
//     //     // data is a parameter containing whatever data was sent
// });