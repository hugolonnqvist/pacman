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

class Ghost {
  constructor(xCord, yCord, size, speed, imgSrc, direction) {
    this.xCord = xCord;
    this.yCord = yCord;
    this.size = size;
    this.speed = speed;
    this.imgSrc = imgSrc;
    this.direction = direction;
  }

  drawGhost() {
    let img = new Image(this.size, this.size);
    img.src = this.imgSrc;

    ctx.drawImage(img, this.xCord, this.yCord, this.size, this.size);
  }

  moveUp() {
    this.yCord -= this.speed;
  }

  moveDowm() {
    this.yCord += this.speed;
  }

  moveLeft() {
    this.xCord -= this.speed;
  }

  moveRight() {
    this.xCord += this.speed;
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let direction = "right";
let nextDirection = "";
let pixelCounter = 0;

let blinky = new Ghost(175, 270, 16, 1, "./images/rosekane_44.png", "up");
let pinky = new Ghost(200, 270, 16, 1, "./images/rosekane_23.png", "up");
let inky = new Ghost(225, 270, 16, 1, "./images/rosekane_19.png", "up");
let clyde = new Ghost(250, 270, 16, 1, "./images/rosekane_27.png", "up");

let pacman = {
  xCord: 16,
  yCord: 272,
  speed: 1,
  radius: 8,
  degree1: Math.PI / 7,
  degree2: -Math.PI / 7,
  color: "yellow",
  coinsEaten: 0,
  drawPacman: function () {
    ctx.beginPath();
    ctx.arc(
      this.xCord,
      this.yCord + 8, 
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
  blinky.drawGhost();
  pinky.drawGhost();
  inky.drawGhost();
  clyde.drawGhost();

  movePacman();

  checkForWin();
  eatCoins();
  drawMap();

  window.requestAnimationFrame(draw);
}

function movePacman() {
  if (pixelCounter < 16) {
    if (direction === "right") {
      pacman.xCord += pacman.speed;
    } else if (direction === "left") {
      pacman.xCord -= pacman.speed;
    } else if (direction === "up") {
      pacman.yCord -= pacman.speed;
    } else if (direction === "down") {
      pacman.yCord += pacman.speed;
    }

    pixelCounter++;
  }

  if (checkUp() || checkDown() || checkLeft() || checkRight()) {
    direction = nextDirection;
    pixelCounter = 0;
  }

  function checkUp() {
    return (
      pixelCounter === 16 &&
      nextDirection === "up" &&
      (board[pacman.yCord / 16 - 1][pacman.xCord / 16] === 0 ||
        board[pacman.yCord / 16 - 1][pacman.xCord / 16] === 13)
    );
  }

  function checkDown() {
    return (
      pixelCounter === 16 &&
      nextDirection === "down" &&
      (board[pacman.yCord / 16 + 1][pacman.xCord / 16] === 0 ||
        board[pacman.yCord / 16 + 1][pacman.xCord / 16] === 13)
    );
  }

  function checkLeft() {
    return (
      pixelCounter === 16 &&
      nextDirection === "left" &&
      (board[pacman.yCord / 16][pacman.xCord / 16 - 1] === 0 ||
        board[pacman.yCord / 16][pacman.xCord / 16 - 1] === 13)
    );
  }

  function checkRight() {
    return (
      pixelCounter === 16 &&
      nextDirection === "right" &&
      (board[pacman.yCord / 16][pacman.xCord / 16 + 1] === 0 ||
        board[pacman.yCord / 16][pacman.xCord / 16 + 1] === 13)
    );
  }

  console.log(direction);
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
      nextDirection = "up";
      break;
    case "ArrowDown":
      nextDirection = "down";
      break;
    case "ArrowLeft":
      nextDirection = "left";
      break;
    case "ArrowRight":
      nextDirection = "right";
      break;
  }
});

draw();
