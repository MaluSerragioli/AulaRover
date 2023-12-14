var Canvas = document.getElementById("myCanvas");
var ctx = Canvas.getContext("2d")
var roverw = 100
var roverh = 90;
var roverx = 10;
var rovery = 10;
var keeper = "mars.jpg";
var roverimg = "rover.png";

function add() {
    bgTag = new Image();
    bgTag.onload = uploadBack;
    bgTag.src = keeper;

    roverTag = new Image();
    roverTag.onload = uploadRover;
    roverTag.src = roverimg
}

function uploadBack() {
    ctx.drawImage(bgTag, 0, 0, Canvas.width, Canvas.height)
}
function uploadRover() {
    ctx.drawImage(roverTag, roverx, rovery, roverw, roverh)
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "37") {
        left()
    }
    if (keyPressed == "39") {
        right()
    }
    if (keyPressed == "38") {
        up()
    }
    if (keyPressed == "40") {
        down()
    }
}
function left() {
    if (roverx >= 0) {
        roverx = roverx - 50;
        uploadBack();
        uploadRover()
    }
}
function right() {
    if (roverx <= 700) {
        roverx = roverx + 50;
        uploadBack();
        uploadRover()
    }
}
function up() {
    if (rovery >= 0) {
        rovery = rovery - 50;
        uploadBack();
        uploadRover()
    }
}
function down() {
    if (rovery <= 500) {
        rovery = rovery + 50;
        uploadBack();
        uploadRover()
    }
}