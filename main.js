//"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

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
  ctx.clearRect(0, 0, 1000, 800);
  pacman.drawPacman();
  pacman.xCord += 2;
  pacman.yCord += 2;
  raf = window.requestAnimationFrame(draw);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      raf = window.requestAnimationFrame(draw);
      break;
    case "ArrowDown":
      raf = window.requestAnimationFrame(draw);
      break;
    case "ArrowLeft":
      raf = window.requestAnimationFrame(draw);
      break;
    case "ArrowRight":
      raf = window.requestAnimationFrame(draw);
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      window.cancelAnimationFrame(raf);
      break;
    case "ArrowDown":
      window.cancelAnimationFrame(raf);
      break;
    case "ArrowLeft":
      window.cancelAnimationFrame(raf);
      break;
    case "ArrowRight":
      window.cancelAnimationFrame(raf);
      break;
  }
});

pacman.drawPacman();
