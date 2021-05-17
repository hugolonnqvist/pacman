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

const BOARD_PROPS = {
  EMPTY: 0,
  COIN: 13,
};

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
  [0,0,0,0,0,0,13,0,0,0,8,0,0,0,0,0,0,8,0,0,0,13,0,0,0,0,0,0],
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
  constructor(xCord, yCord, size, speed, imgSrc, direction, pixelCounter) {
    this.xCord = xCord;
    this.yCord = yCord;
    this.size = size;
    this.speed = speed;
    this.imgSrc = imgSrc;
    this.direction = direction;
    this.pixelCounter = pixelCounter;
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

let blinky = new Ghost(176, 272, 16, 1, "./images/rosekane_44.png", "right", 0);
let pinky = new Ghost(208, 272, 16, 1, "./images/rosekane_23.png", "up", 0);
let inky = new Ghost(224, 272, 16, 1, "./images/rosekane_19.png", "up", 0);
let clyde = new Ghost(256, 272, 16, 1, "./images/rosekane_27.png", "up", 0);

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
      this.xCord + this.radius,
      this.yCord + this.radius,
      this.radius,
      this.degree1,
      this.degree2,
      false
    );
    ctx.lineTo(this.xCord + this.radius, this.yCord + this.radius);
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

  moveBlinky();
  movePinky();
  moveInky();
  moveClyde();

  killPacman(blinky.xCord, blinky.yCord);
  killPacman(pinky.xCord, pinky.yCord);
  killPacman(inky.xCord, inky.yCord);
  killPacman(clyde.xCord, clyde.yCord);

  rotatePacman();
  eatCoins();
  checkForWin();
  drawMap();

  window.requestAnimationFrame(draw);
}

setInterval(releaseBlinky, 5000);
setInterval(releasePinky, 10000);
setInterval(releaseInky, 15000);
setInterval(releaseClyde, 20000);

function cordToArray(cord) {
  return cord / 16;
}

function rotatePacman() {
  if (direction === "up") {
    pacman.degree1 = -Math.PI / 4;
    pacman.degree2 = -Math.PI / 1.4;
  }
  if (direction === "down") {
    pacman.degree1 = Math.PI / 1.4;
    pacman.degree2 = Math.PI / 4.2;
  }
  if (direction === "left") {
    pacman.degree1 = -Math.PI / 1.2;
    pacman.degree2 = Math.PI / 1.2;
  }
  if (direction === "right") {
    pacman.degree1 = Math.PI / 7;
    pacman.degree2 = -Math.PI / 7;
  }
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
      (board[cordToArray(pacman.yCord) - 1][cordToArray(pacman.xCord)] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(pacman.yCord) - 1][cordToArray(pacman.xCord)] ===
          BOARD_PROPS.COIN)
    );
  }

  function checkDown() {
    return (
      pixelCounter === 16 &&
      nextDirection === "down" &&
      (board[cordToArray(pacman.yCord) + 1][cordToArray(pacman.xCord)] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(pacman.yCord) + 1][cordToArray(pacman.xCord)] ===
          BOARD_PROPS.COIN)
    );
  }

  function checkLeft() {
    return (
      pixelCounter === 16 &&
      nextDirection === "left" &&
      (board[cordToArray(pacman.yCord)][cordToArray(pacman.xCord) - 1] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(pacman.yCord)][cordToArray(pacman.xCord) - 1] ===
          BOARD_PROPS.COIN)
    );
  }

  function checkRight() {
    return (
      pixelCounter === 16 &&
      nextDirection === "right" &&
      (board[cordToArray(pacman.yCord)][cordToArray(pacman.xCord) + 1] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(pacman.yCord)][cordToArray(pacman.xCord) + 1] ===
          BOARD_PROPS.COIN)
    );
  }
}

function moveBlinky() {
  let directions = [];

  if (blinky.pixelCounter < 16) {
    if (blinky.direction === "right") {
      blinky.xCord += blinky.speed;
    } else if (blinky.direction === "left") {
      blinky.xCord -= blinky.speed;
    } else if (blinky.direction === "up") {
      blinky.yCord -= blinky.speed;
    } else if (blinky.direction === "down") {
      blinky.yCord += blinky.speed;
    }
    blinky.pixelCounter++;
  }

  ghostCheckWall(
    blinky.pixelCounter,
    blinky.direction,
    blinky.xCord,
    blinky.yCord,
    directions
  );

  if (blinky.pixelCounter === 16) {
    blinky.direction =
      directions[Math.floor(Math.random() * directions.length)];
    directions.splice(0, directions.length);
    blinky.pixelCounter = 0;
  }
}

function movePinky() {
  let directions = [];

  if (pinky.pixelCounter < 16) {
    if (pinky.direction === "right") {
      pinky.xCord += pinky.speed;
    } else if (pinky.direction === "left") {
      pinky.xCord -= pinky.speed;
    } else if (pinky.direction === "up") {
      pinky.yCord -= pinky.speed;
    } else if (pinky.direction === "down") {
      pinky.yCord += pinky.speed;
    }
    pinky.pixelCounter++;
  }

  ghostCheckWall(
    pinky.pixelCounter,
    pinky.direction,
    pinky.xCord,
    pinky.yCord,
    directions
  );

  if (pinky.pixelCounter === 16) {
    pinky.direction = directions[Math.floor(Math.random() * directions.length)];
    directions.splice(0, directions.length);
    pinky.pixelCounter = 0;
  }
}

function moveInky() {
  let directions = [];

  if (inky.pixelCounter < 16) {
    if (inky.direction === "right") {
      inky.xCord += inky.speed;
    } else if (inky.direction === "left") {
      inky.xCord -= inky.speed;
    } else if (inky.direction === "up") {
      inky.yCord -= inky.speed;
    } else if (inky.direction === "down") {
      inky.yCord += inky.speed;
    }
    inky.pixelCounter++;
  }

  ghostCheckWall(
    inky.pixelCounter,
    inky.direction,
    inky.xCord,
    inky.yCord,
    directions
  );

  if (inky.pixelCounter === 16) {
    inky.direction = directions[Math.floor(Math.random() * directions.length)];
    directions.splice(0, directions.length);
    inky.pixelCounter = 0;
  }
}

function moveClyde() {
  let directions = [];

  if (clyde.pixelCounter < 16) {
    if (clyde.direction === "right") {
      clyde.xCord += clyde.speed;
    } else if (clyde.direction === "left") {
      clyde.xCord -= clyde.speed;
    } else if (clyde.direction === "up") {
      clyde.yCord -= clyde.speed;
    } else if (clyde.direction === "down") {
      clyde.yCord += clyde.speed;
    }
    clyde.pixelCounter++;
  }

  ghostCheckWall(
    clyde.pixelCounter,
    clyde.direction,
    clyde.xCord,
    clyde.yCord,
    directions
  );

  if (clyde.pixelCounter === 16) {
    clyde.direction = directions[Math.floor(Math.random() * directions.length)];
    directions.splice(0, directions.length);
    clyde.pixelCounter = 0;
  }
}

function ghostCheckWall(pixelCounter, direction, xCord, yCord, directions) {
  if (ghostCheckRight(pixelCounter, direction, xCord, yCord)) {
    directions.push("right");
  }
  if (ghostCheckLeft(pixelCounter, direction, xCord, yCord)) {
    directions.push("left");
  }
  if (ghostCheckUp(pixelCounter, direction, xCord, yCord)) {
    directions.push("up");
  }
  if (ghostCheckDown(pixelCounter, direction, xCord, yCord)) {
    directions.push("down");
  }

  function ghostCheckRight(ghostPixelCounter, ghostDirection, xCord, yCord) {
    return (
      ghostPixelCounter === 16 &&
      ghostDirection !== "left" &&
      board[cordToArray(yCord)] &&
      (board[cordToArray(yCord)][cordToArray(xCord) + 1] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(yCord)][cordToArray(xCord) + 1] === BOARD_PROPS.COIN)
    );
  }
  function ghostCheckLeft(ghostPixelCounter, ghostDirection, xCord, yCord) {
    return (
      ghostPixelCounter === 16 &&
      ghostDirection !== "right" &&
      board[cordToArray(yCord)] &&
      (board[cordToArray(yCord)][cordToArray(xCord) - 1] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(yCord)][cordToArray(xCord) - 1] === BOARD_PROPS.COIN)
    );
  }
  function ghostCheckUp(ghostPixelCounter, ghostDirection, xCord, yCord) {
    return (
      ghostPixelCounter === 16 &&
      ghostDirection !== "down" &&
      board[cordToArray(yCord) - 1] &&
      (board[cordToArray(yCord) - 1][cordToArray(xCord)] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(yCord) - 1][cordToArray(xCord)] === BOARD_PROPS.COIN)
    );
  }
  function ghostCheckDown(ghostPixelCounter, ghostDirection, xCord, yCord) {
    return (
      ghostPixelCounter === 16 &&
      ghostDirection !== "up" &&
      board[cordToArray(yCord) + 1] &&
      (board[cordToArray(yCord) + 1][cordToArray(xCord)] ===
        BOARD_PROPS.EMPTY ||
        board[cordToArray(yCord) + 1][cordToArray(xCord)] === BOARD_PROPS.COIN)
    );
  }
}

function releaseBlinky() {
  blinky.yCord -= 48;
}

function releasePinky() {
  pinky.yCord -= 48;
}

function releaseInky() {
  inky.yCord -= 48;
}

function releaseClyde() {
  clyde.yCord -= 48;
}

function eatCoins() {
  if (
    board[cordToArray(pacman.yCord)] !== undefined &&
    board[cordToArray(pacman.yCord)][cordToArray(pacman.xCord)] ===
      BOARD_PROPS.COIN
  ) {
    board[cordToArray(pacman.yCord)][cordToArray(pacman.xCord)] =
      BOARD_PROPS.EMPTY;
    pacman.coinsEaten++;
  }
}

function killPacman(xCord, yCord) {
  if (pacman.xCord === xCord && pacman.yCord === yCord) {
    alert("you lost");
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
