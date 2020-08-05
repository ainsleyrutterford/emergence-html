"use strict";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = 0, y = 0, x_speed = 1.3, y_speed = 1;

function scale_canvas(canvas) {
    canvas.style.width  = "100%";
    canvas.style.height = "100%";
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

scale_canvas(canvas)

// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// The draw() function. Calls itself repeatedly.
function draw() {
    x = (x + x_speed);
    y = (y + y_speed);

    if (x > (canvas.width  - 20) || x < 0) x_speed = -x_speed;
    if (y > (canvas.height - 20) || y < 0) y_speed = -y_speed;

    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#eee';
    ctx.fillRect(x, y, 20, 20);

    console.log(x, y);

    // Call draw again
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);