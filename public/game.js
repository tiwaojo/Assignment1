var socket = io();


var playerName = document.getElementById("player").value;

function player() {

    // Gets user name
    // var playerName = {
    //     name: document.getElementById("player").value
    // };


    document.getElementById("player").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("print").innerHTML = "Your Name: " + playerName;
}



socket.on('state', function(players) {

    for (var id in players) {
        var player = players[id];
        // playerName;

    }
});


socket.on('connect', function() {
    // TIP: you can avoid listening on `connect` and listen on events directly too!
    socket.emit("name", document.getElementById("player"), function(data) { // args are sent in order to acknowledgement function
        // data = player.name; //  // data will be 'tobi says woot'
        // console.log(data);


        //     socket.emit("selectOpt", {
        //     paper: paper.value,
        // })
        alert(data);
    });
});






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

var play = {
    rock: false,
    paper: false,
    scissors: false,
};
var rock = document.getElementById("rock"),
    paper = document.getElementById("paper"),
    scissors = document.getElementById("scissors");

rock.addEventListener("click", function() {

    socket.emit("selectOpt", {
        rock: rock.value,
    })
});
paper.addEventListener("click", function() {

    socket.emit("selectOpt", {
        paper: paper,
    })
});
scissors.addEventListener("click", function() {

    socket.emit("selectOpt", {
        scissors: scissors.value,
    })
});



socket.on("selectOpt", function(data) {
    document.getElementById("print").innerHTML += '<h3>' + data.rock + "</h3>";
});

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



// constantly send the users play choice to server
socket.emit('new player');
setInterval(function() {
    socket.emit('play', play);
}, 1000 / 60);