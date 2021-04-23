"use strict";

function generateBoard() {
  const board = document.getElementById("boardContainer");
  for (let i = 0; i < 200; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    board.append(square);
  }
}

generateBoard();

//Canvas testing

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//ctx.fillStyle = "blue";
//ctx.fillRect(10, 10, 100, 100);
