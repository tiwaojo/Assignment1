var socket = io();



function player() {

    // Gets user name
    var player = {
        name: document.getElementById("player").value
    };
    // // alert(playerName);
    document.getElementById("print").innerHTML = "Your Name: " + player.name;
    // = document.getElementById("player");


    document.getElementById("player").style.display = "none";
    document.getElementById("submit").style.display = "none";



    // Sends the user name to server
    // document.getElementById("player").click(function()
    // socket.emit('chat message', document.getElementById("player").value);
    // });
    socket.emit("name", document.getElementById("player").value);

    // socket.on('name', function(player) {
    //     // data is a parameter containing whatever data was sent

    // });


    // app.get('/', function(req, res) {
    //         res.send(playerName)
    //     })
    // setInterval(function() {
    // socket.emit('message', playerName);
    // }, 1000 / 60);
}
// var play = {
//     rock: false,
//     paper: false,
//     scissors: false,
// }
// var x;
// ('click', function selectCard(event) {
//     switch (document.getElementById("")) {
//         case 0: // A
//             play.rock = true;
//             alert("rock");
//             break;
//         case 1: // W
//             play.paper = true;
//             alert("paper");
//             break;
//         case 2: // D
//             play.scissors = true;
//             alert("scissors");
//             break;

//     }
// });
// // socket.emit('new player');
// // constantly send the users play choice to server
// setInterval(function() {
//     socket.emit('play', play);
// });