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
        io.sockets.emit("selectOpt1", data); {
            var playRock = data;
        };
        // fn(data + "selected");
    });
    socket.on("selectOpt2", function(data) {
        io.sockets.emit("selectOpt2", data); {
            var playPaper = data;
        }
        // fn(data + "selected");
    });
    socket.on("selectOpt3", function(data) {
        io.sockets.emit("selectOpt3", data); {
            var playScissors = data;
        }
        // fn(data + "selected");
    });

    socket.on("name", function(name, fn) {
        fn(name + ' is playing ');
    });
});

var players = {};
var player1 = {};
var player2 = {};
// var playerName, playerId;
io.on('connection', function(socket) {
    socket.on('new player', function(data) {
        var playerName = data.playerName;
        var playerId = data.playerId;
        // console.log(playerName+""+playerId);
        // player1[playerName] = playerId;
        // player[0] = player1;
        // player[1] = player2;

        players[socket.id] = {
            // alert("this");
            rock: null,
            paper: null,
            scissors: null

        };
        // player2 = {
        //     // alert("this");
        //     rock: null,
        //     paper: null,
        //     scissors: null

        // };
        // if (player1[playerId].rock == player2[playerId].rock) {
        //     console.log("Both played Rock");
        // }

        // console.log(players)
    });

    socket.on('play', function(data) {
        // This is supposedly for if the client disconnects the canvas removes the player from screen
        // var player1 = player1[socket.id] || {};
        // var player2 = player2[socket.id] || {};
        if (data == data.rock) {
            console.log("rock was played");
        }
        if (data == data.paper) {
            // player.paper = true;
            console.log("rock was played");
        }
        if (data == data.scissors) {
            // player.scissors = true;
            console.log("rock was played");
        }

    });
});
// setInterval(function() {
//     io.sockets.emit('state', players);

// }, 1000 / 60);


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