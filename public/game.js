var socket = io();


var playerName = document.getElementById("player").value;

function player() {

    // Gets user name
    // var playerName = {
    //     name: document.getElementById("player").value
    // };

    // playerName
    document.getElementById("player").style.display = "none";
    document.getElementById("submit").style.display = "none";
    // document.getElementById("print").innerHTML = "Your Name: " + playerName;
    return playerName;
}

// Names of players
socket.on('connect', function() {

    // TIP: you can avoid listening on `connect` and listen on events directly too!
    if (player() != null) {
        socket.emit("name", document.getElementById("player"), function(data) { // args are sent in order to acknowledgement function
            // console.log(data);
            alert(data);
        });
    }
});





var play = {
    rock: false,
    paper: false,
    scissors: false,
};
var rock = document.getElementById("rock"),
    paper = document.getElementById("paper"),
    scissors = document.getElementById("scissors");
// choice = document.getElementsByClassName("item");

rock.addEventListener("click", function() {

    socket.emit("selectOpt1", {
        rock: rock.value,
    })
    play.rock = true;
});
paper.addEventListener("click", function() {
    socket.emit("selectOpt2", {
        paper: paper.value,
    })

    play.paper = true;
});
scissors.addEventListener("click", function() {

    socket.emit("selectOpt3", {
        scissors: scissors.value,
    });
    play.scissors = true;
});


// What you played
socket.on("selectOpt1", function(data) {
    document.getElementById("print").innerHTML += '<h3>' + "player1 won";
    //  + data.rock + "</h3>";
});

socket.on("selectOpt2", function(data) {
    document.getElementById("print").innerHTML += '<h3>' + "You played: " + data.paper + "</h3>";
});

socket.on("selectOpt3", function(data) {
    document.getElementById("print").innerHTML += '<h3>' + "You played: " + data.scissors + "</h3>";
});


socket.emit('new player');
setInterval(function() {
    socket.emit('play', play);
    // console.log("play");
}, 1000 / 60);


socket.on('state', function(players) {
    // var clients = [];
    for (var id in players) {
        var player = players[id];
        player = { rock, paper, scissors }
            // clients[] = players[id];
            // clients[1] = players[id];
            // var clients = [players[id]];



        // alert(player[0]);
        // rock;
        // paper;
        // scissors;


    }
    // if (pl)



});

// if ((clients[0] == rock) && (clients[1] == rock)) {
//     alert("won");
// }// var player1 = io.sockets.clients(players);
// var player2 = io.sockets.clients(players);
// scissors.style.display = none;
// function selectRock() {
//     // alert("rosc");
//     play.rock = true;
// };

// function selectPaper() {
//     // alert("rosc");
//     play.paper = true;
// };

// function selectScissors(event) {
//     // alert("rosc");
//     play.scissors = true;
// };



// socket.on('connect', function(data) {
//     document.getElementById("print").innerHTML = "Your Name: " + player.name;
// });


// = document.getElementById("player");



// Sends the user name to server
// document.getElementById("player").click(function()
// socket.emit('chat message', document.getElementById("player").value);
// });
// socket.emit("name", document.getElementById("player").value);

// socket.on('name', function(player) {
//     // data is a parameter containing whatever data was sent

// });


// app.get('/', function(req, res) {
//         res.send(playerName)
//     })
// setInterval(function() {
// socket.emit('message', playerName);
// }, 1000 / 60);

// constantly send the users play choice to server