//"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

let arrowUp;
let arrowDown;
let arrowRight;
let arrowLeft;

let pacman = {
  xCord: 50,
  yCord: 50,
  radius: 20,
  color: "yellow",
  drawPacman: function () {
    ctx.beginPath();
    ctx.arc(this.xCord, this.yCord, this.radius, 0, Math.PI * 2, true);
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

  raf = window.requestAnimationFrame(draw);
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
