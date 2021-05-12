//"use strict";
class Ghost {
  constructor(xCord, yCord, speed, color, img) {
    this.xCord = xCord;
    this.yCord = yCord;
    this.speed = speed;
    this.color = color;
    this.img = img;
  }
}

const clyde = new Ghost(100, 100, 1.2, "yellow");
const blinky = new Ghost(100, 200, 1.2, "red");
const pinky = new Ghost(100, 300, 1.2, "pink");
const inky = new Ghost(100, 400, 1.2, "blue");

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
//10: round corner leftdown
//11: rond corner rightup
//12: round corner rightdown
//13: coin

// prettier-ignore
let board = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [3,1,1,1,1,1,1,1,1,1,1,1,1,5,3,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [2,13,13,13,13,13,13,13,13,13,13,13,13,2,2,13,13,13,13,13,13,13,13,13,13,13,13,2],
    [2,13,3,1,1,5,13,3,1,1,1,5,13,2,2,13,3,1,1,1,5,13,3,1,1,5,13,2],
    [2,13,2,0,0,2,13,2,0,0,0,2,13,2,2,13,2,0,0,0,2,13,2,0,0,2,13,2],
    [2,13,4,1,1,6,13,4,1,1,1,6,13,4,6,13,4,1,1,1,6,13,4,1,1,6,13,2],
    [2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,2],
    [2,13,3,1,1,5,13,3,5,13,3,1,1,1,1,1,1,5,13,3,5,13,3,1,1,5,13,2],
    [2,13,4,1,1,6,13,2,2,13,4,1,1,5,3,1,1,6,13,2,2,13,4,1,1,6,13,2],
    [2,13,13,13,13,13,13,2,2,13,13,13,13,2,2,13,13,13,13,2,2,13,13,13,13,13,13,2],
    [4,1,1,1,1,5,13,2,4,1,1,5,13,2,2,13,3,1,1,6,2,13,3,1,1,1,1,6],
    [0,0,0,0,0,2,13,2,3,1,1,6,0,4,6,0,4,1,1,5,2,13,2,0,0,0,0,0],
    [0,0,0,0,0,2,13,2,2,0,0,0,0,0,0,0,0,0,0,2,2,13,2,0,0,0,0,0],
    [0,0,0,0,0,2,13,2,2,0,9,7,7,7,7,7,7,11,0,2,2,13,2,0,0,0,0,0],
    [1,1,1,1,1,6,13,4,6,0,8,0,0,0,0,0,0,8,0,4,6,13,4,1,1,1,1,1],
    [0,0,0,0,0,0,13,0,0,0,8,0,14,15,16,17,0,8,0,0,0,13,0,0,0,0,0,0],
    [1,1,1,1,1,5,13,3,5,0,8,0,0,0,0,0,0,8,0,3,5,13,3,1,1,1,1,1],
    [0,0,0,0,0,2,13,2,2,0,10,7,7,7,7,7,7,12,0,2,2,13,2,0,0,0,0,0],
    [0,0,0,0,0,2,13,2,2,0,0,0,0,0,0,0,0,0,0,2,2,13,2,0,0,0,0,0],
    [0,0,0,0,0,2,13,2,2,0,3,1,1,1,1,1,1,5,0,2,2,13,2,0,0,0,0,0],
    [3,1,1,1,1,6,13,4,6,13,4,1,1,5,3,1,1,6,13,4,6,13,4,1,1,1,1,5],
    [2,13,13,13,13,13,13,13,13,13,13,13,13,2,2,13,13,13,13,13,13,13,13,13,13,13,13,2],
    [2,13,3,1,1,5,13,3,1,1,1,5,13,2,2,13,3,1,1,1,5,13,3,1,1,5,13,2],
    [2,13,4,1,5,2,13,4,1,1,1,6,13,4,6,13,4,1,1,1,6,13,2,3,1,6,13,2],
    [2,13,13,13,2,2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,2,2,13,13,13,2],
    [4,1,5,13,2,2,13,3,5,13,3,1,1,1,1,1,1,5,13,3,5,13,2,2,13,3,1,6],
    [3,1,6,13,4,6,13,2,2,13,4,1,1,5,3,1,1,6,13,2,2,13,4,6,13,4,1,5],
    [2,13,13,13,13,13,13,2,2,13,13,13,13,2,2,13,13,13,13,2,2,13,13,13,13,13,13,2],
    [2,13,3,1,1,1,1,6,4,1,1,5,13,2,2,13,3,1,1,6,4,1,1,1,1,5,13,2],
    [2,13,4,1,1,1,1,1,1,1,1,6,13,4,6,13,4,1,1,1,1,1,1,1,1,6,13,2],
    [2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,2],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let pacman = {
  xCord: 25,
  yCord: 280,
  speed: 1.5,
  radius: 10,
  degree1: Math.PI / 7,
  degree2: -Math.PI / 7,
  color: "yellow",
  coinsEaten: 0,
  drawPacman: function () {
    ctx.beginPath();
    ctx.arc(
      this.xCord,
      this.yCord,
      this.radius,
      this.degree1,
      this.degree2,
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
  checkForWin();
  eatCoins();
  drawMap();

  if (arrowUp && checkForWallUpOrDown(1)) {
    rotatePacman(-Math.PI / 4, -Math.PI / 1.3);
    pacman.xCord = (Math.floor(pacman.xCord / 16) + 0.5) * 16;
    pacman.yCord -= pacman.speed;
  } else if (arrowDown && checkForWallUpOrDown(-1)) {
    rotatePacman(Math.PI / 1.4, Math.PI / 4);
    pacman.xCord = (Math.floor(pacman.xCord / 16) + 0.5) * 16;
    pacman.yCord += pacman.speed;
  } else if (arrowLeft && checkForWallLeftOrRight(1)) {
    rotatePacman(-Math.PI / 1.2, Math.PI / 1.3);
    pacman.yCord = (Math.floor(pacman.yCord / 16) + 0.5) * 16;
    pacman.xCord -= pacman.speed;
  } else if (arrowRight && checkForWallLeftOrRight(-1)) {
    rotatePacman(Math.PI / 7, -Math.PI / 7);
    pacman.yCord = (Math.floor(pacman.yCord / 16) + 0.5) * 16;
    pacman.xCord += pacman.speed;
  }
  window.requestAnimationFrame(draw);
}

//Value decides if the function checks for walls up or down
function checkForWallUpOrDown(value) {
  return (
    board[Math.floor((pacman.yCord + 7 * value) / 16) - value][
      Math.floor(pacman.xCord / 16)
    ] === 0 ||
    board[Math.floor((pacman.yCord + 7 * value) / 16) - value][
      Math.floor(pacman.xCord / 16)
    ] === 13
  );
}

//Value decides if the function checks for walls left or right
function checkForWallLeftOrRight(value) {
  return (
    board[Math.floor(pacman.yCord / 16)][
      Math.floor((pacman.xCord + 7 * value) / 16) - value
    ] === 0 ||
    board[Math.floor(pacman.yCord / 16)][
      Math.floor((pacman.xCord + 7 * value) / 16) - value
    ] === 13
  );
}

function rotatePacman(degree1, degree2) {
  pacman.degree1 = degree1;
  pacman.degree2 = degree2;
}

function eatCoins() {
  if (
    board[Math.floor(pacman.yCord / 16)][Math.floor(pacman.xCord / 16)] === 13
  ) {
    board[Math.floor(pacman.yCord / 16)][Math.floor(pacman.xCord / 16)] = 0;
    pacman.coinsEaten++;
  }
}

function checkForWin() {
  if (pacman.coinsEaten === 250) {
    alert("You have won!");
  }
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
  let img13 = new Image(tileSize, tileSize);

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
  img13.src = "./images/rosekane_0.png";

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
    img13,
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
      if (checkForWallUpOrDown(1)) {
        arrowUp = true;
        arrowDown = false;
        arrowLeft = false;
        arrowRight = false;
      }
      break;
    case "ArrowDown":
      if (checkForWallUpOrDown(-1)) {
        arrowDown = true;
        arrowUp = false;
        arrowLeft = false;
        arrowRight = false;
      }
      break;
    case "ArrowLeft":
      if (checkForWallLeftOrRight(1)) {
        arrowLeft = true;
        arrowUp = false;
        arrowDown = false;
        arrowRight = false;
      }
      break;
    case "ArrowRight":
      if (checkForWallLeftOrRight(-1)) {
        arrowRight = true;
        arrowUp = false;
        arrowLeft = false;
        arrowDown = false;
      }
      break;
  }
});

draw();
