var socket = io();




function player() {

    // Gets user name
    // var playerName = {
    //     name: document.getElementById("player").value
    // };
    var playerName = document.getElementById("player").value;

    document.getElementById("player").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("print").innerHTML = "Your Name: " + playerName;
    return playerName;
}

// Names of players
socket.on('connect', function() {

    // TIP: you can avoid listening on `connect` and listen on events directly too!
    if (player() != null) {
        socket.emit("name", document.getElementById("player"), function(data) { // args are sent in order to acknowledgement function
            // data = player.name; //  // data will be 'tobi says woot'
            // console.log(data);


            //     socket.emit("selectOpt", {
            //     paper: paper.value,
            // })
            alert(data);
        });
    }
});

socket.on('state', function(players) {

    for (var id in players) {
        var player = players[id];
        // playerName;

    }
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
// choice = document.getElementsByClassName("item");

rock.addEventListener("click", function() {
    // document.getElementsByClassName("item").style.display = none;
    socket.emit("selectOpt1", {
        rock: rock.value,
    })
    play.rock = true;
});
paper.addEventListener("click", function() {
    socket.emit("selectOpt2", {
            paper: paper.value,
        })
        // document.getElementsByClassName("item").style.display = none;
    play.paper = true;
});
scissors.addEventListener("click", function() {

    socket.emit("selectOpt3", {
        scissors: scissors.value,
    });
    play.scissors = true;
});



socket.on("selectOpt1", function(data) {
    // document.getElementsByClassName("item").style.display = none;
    document.getElementById("print").innerHTML += '<h3>' + "You played: " + data.rock + "</h3>";
});
// rock.style.display = none;
socket.on("selectOpt2", function(data) {
    // document.getElementsByClassName("item").style.display = none;
    document.getElementById("print").innerHTML += '<h3>' + "You played: " + data.paper + "</h3>";
});
// paper.style.display = none;
socket.on("selectOpt3", function(data) {
    // document.getElementsByClassName("item").style.display = none;
    document.getElementById("print").innerHTML += '<h3>' + "You played: " + data.scissors + "</h3>";
});


socket.emit('new player');
setInterval(function() {
    socket.emit('play', play);
    // console.log("play");
}, 1000 / 60);
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



// constantly send the users play choice to server