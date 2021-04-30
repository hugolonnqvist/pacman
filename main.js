//"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let arrowUp;
let arrowDown;
let arrowRight;
let arrowLeft;

let pacman = {
  xCord: 37,
  yCord: 37,
  radius: 13,
  color: "yellow",
  drawPacman: function () {
    ctx.beginPath();
    ctx.arc(
      this.xCord,
      this.yCord,
      this.radius,
      Math.PI / 7,
      -Math.PI / 7,
      false
    );
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  pacman.drawPacman();

  if (arrowUp) {
    pacman.yCord -= 2;
  } else if (arrowDown) {
    pacman.yCord += 2;
  } else if (arrowLeft) {
    pacman.xCord -= 2;
  } else if (arrowRight) {
    pacman.xCord += 2;
  }

  let board1 = [
    [0, 0, 0, canvas.clientHeight],
    [0, 0, canvas.clientWidth, 0],
    [canvas.clientWidth, 0, canvas.clientWidth, canvas.clientHeight],
    [0, canvas.clientHeight, canvas.clientWidth, canvas.clientHeight],
  ];

  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  board1.forEach((cord) => {
    ctx.beginPath();
    ctx.strokeStyle = "darkblue";
    ctx.lineWidth = 5;
    ctx.moveTo(cord[0], cord[1]);
    ctx.lineTo(cord[2], cord[3]);
    ctx.stroke();
  });

  window.requestAnimationFrame(draw);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      arrowUp = true;
      break;
    case "ArrowDown":
      arrowDown = true;
      break;
    case "ArrowLeft":
      arrowLeft = true;
      break;
    case "ArrowRight":
      arrowRight = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      arrowUp = false;
      break;
    case "ArrowDown":
      arrowDown = false;
      break;
    case "ArrowLeft":
      arrowLeft = false;
      break;
    case "ArrowRight":
      arrowRight = false;
      break;
  }
});

draw();
