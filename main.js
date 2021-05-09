//"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let arrowUp;
let arrowDown;
let arrowRight;
let arrowLeft;

//0: empty
//1: straight line horizontal
//2: straight line downwards
//3: rond corner leftup
//4:round corner leftdown
//5: rond corner rightup
//6: round corner rightdown

//Ghost box images:
//7: straight line horizontal
//8: straight line downwards
//9: rond corner leftup
//10:round corner leftdown
//11: rond corner rightup
//12: round corner rightdown

// prettier-ignore
let board = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [3,1,1,1,1,1,1,1,1,1,1,1,1,5,3,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,3,1,1,5,0,3,1,1,1,5,0,2,2,0,3,1,1,1,5,0,3,1,1,5,0,2],
    [2,0,2,0,0,2,0,2,0,0,0,2,0,2,2,0,2,0,0,0,2,0,2,0,0,2,0,2],
    [2,0,4,1,1,6,0,4,1,1,1,6,0,4,6,0,4,1,1,1,6,0,4,1,1,6,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,3,1,1,5,0,3,5,0,3,1,1,1,1,1,1,5,0,3,5,0,3,1,1,5,0,2],
    [2,0,4,1,1,6,0,2,2,0,4,1,1,5,3,1,1,6,0,2,2,0,4,1,1,6,0,2],
    [2,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,2],
    [4,1,1,1,1,5,0,2,4,1,1,5,0,2,2,0,3,1,1,6,2,0,3,1,1,1,1,6],
    [0,0,0,0,0,2,0,2,3,1,1,6,0,4,6,0,4,1,1,5,2,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,2,2,0,9,7,7,7,7,7,7,11,0,2,2,0,2,0,0,0,0,0],
    [1,1,1,1,1,6,0,4,6,0,8,0,0,0,0,0,0,8,0,4,6,0,4,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,5,0,3,5,0,8,0,0,0,0,0,0,8,0,3,5,0,3,1,1,1,1,1],
    [0,0,0,0,0,2,0,2,2,0,10,7,7,7,7,7,7,12,0,2,2,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,2,2,0,3,1,1,1,1,1,1,5,0,2,2,0,2,0,0,0,0,0],
    [3,1,1,1,1,6,0,4,6,0,4,1,1,5,3,1,1,6,0,4,6,0,4,1,1,1,1,5],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,3,1,1,5,0,3,1,1,1,5,0,2,2,0,3,1,1,1,5,0,3,1,1,5,0,2],
    [2,0,4,1,5,2,0,4,1,1,1,6,0,4,6,0,4,1,1,1,6,0,2,3,1,6,0,2],
    [2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2],
    [4,1,5,0,2,2,0,3,5,0,3,1,1,1,1,1,1,5,0,3,5,0,2,2,0,3,1,6],
    [3,1,6,0,4,6,0,2,2,0,4,1,1,5,3,1,1,6,0,2,2,0,4,6,0,4,1,5],
    [2,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,2],
    [2,0,3,1,1,1,1,6,4,1,1,5,0,2,2,0,3,1,1,6,4,1,1,1,1,5,0,2],
    [2,0,4,1,1,1,1,1,1,1,1,6,0,4,6,0,4,1,1,1,1,1,1,1,1,6,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let pacman = {
  xCord: 25,
  yCord: 73,
  speed: 1.5,
  radius: 9,
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
    ctx.lineTo(this.xCord, this.yCord);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  pacman.drawPacman();
  drawMap();

  if (arrowUp && checkWallUp()) {
    pacman.yCord -= pacman.speed;
  } else if (arrowDown && checkWallDown()) {
    pacman.yCord += pacman.speed;
  } else if (arrowLeft && checkWallLeft()) {
    pacman.xCord -= pacman.speed;
  } else if (arrowRight && checkWallRight()) {
    pacman.xCord += pacman.speed;
  }

  window.requestAnimationFrame(draw);
}

function checkWallUp() {
  return (
    board[Math.floor((pacman.yCord + pacman.radius) / 16) - 1][
      Math.floor(pacman.xCord / 16)
    ] === 0
  );
}

function checkWallDown() {
  return (
    board[Math.floor((pacman.yCord - pacman.radius) / 16) + 1][
      Math.floor(pacman.xCord / 16)
    ] === 0
  );
}

function checkWallLeft() {
  return (
    board[Math.floor(pacman.yCord / 16)][
      Math.floor((pacman.xCord + pacman.radius) / 16) - 1
    ] === 0
  );
}
function checkWallRight() {
  return (
    board[Math.floor(pacman.yCord / 16)][
      Math.floor((pacman.xCord - pacman.radius) / 16) + 1
    ] === 0
  );
}

function drawMap() {
  const tileSize = 16;

  let img1 = new Image(tileSize, tileSize);
  let img2 = new Image(tileSize, tileSize);
  let img3 = new Image(tileSize, tileSize);
  let img4 = new Image(tileSize, tileSize);
  let img5 = new Image(tileSize, tileSize);
  let img6 = new Image(tileSize, tileSize);

  let img7 = new Image(tileSize, tileSize);
  let img8 = new Image(tileSize, tileSize);
  let img9 = new Image(tileSize, tileSize);
  let img10 = new Image(tileSize, tileSize);
  let img11 = new Image(tileSize, tileSize);
  let img12 = new Image(tileSize, tileSize);

  img1.src = "./images/rosekane_228.png";
  img2.src = "./images/rosekane_227.png";
  img3.src = "./images/rosekane_176.png";
  img4.src = "./images/rosekane_210.png";
  img5.src = "./images/rosekane_178.png";
  img6.src = "./images/rosekane_212.png";

  img7.src = "./images/rosekane_64.png";
  img8.src = "./images/rosekane_63.png";
  img9.src = "./images/rosekane_112.png";
  img10.src = "./images/rosekane_110.png";
  img11.src = "./images/rosekane_113.png";
  img12.src = "./images/rosekane_111.png";

  let images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  for (let y = 0; y < canvas.clientHeight / tileSize; y++) {
    for (let x = 0; x < canvas.clientWidth / tileSize; x++) {
      for (let i = 1; i <= images.length; i++) {
        if (board[y][x] === i) {
          ctx.drawImage(
            images[i - 1],
            x * tileSize,
            y * tileSize,
            tileSize,
            tileSize
          );
        }
      }
    }
  }
}

//Pacman keeps going in a direction until another arrow direction is pressed
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (checkWallUp()) {
        arrowUp = true;
        arrowDown = false;
        arrowLeft = false;
        arrowRight = false;
      }
      break;
    case "ArrowDown":
      if (checkWallDown()) {
        arrowDown = true;
        arrowUp = false;
        arrowLeft = false;
        arrowRight = false;
      }
      break;
    case "ArrowLeft":
      if (checkWallLeft()) {
        arrowLeft = true;
        arrowUp = false;
        arrowDown = false;
        arrowRight = false;
      }
      break;
    case "ArrowRight":
      if (checkWallRight()) {
        arrowRight = true;
        arrowUp = false;
        arrowDown = false;
        arrowLeft = false;
      }
      break;
  }
});
/*
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
});*/

draw();
