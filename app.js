const hallo = document.querySelector("h1");

let leftSideOfSquare = 50;
let topSideOfSquare = 150;
let squareHeight = 50;
let squareWidth = 50;

function keyPressed() {
  console.log("keyCode:", keyCode);
  if (keyCode === 38) {
    topSideOfSquare -= 50;
    if (topSideOfSquare <= 0) {
      topSideOfSquare = 0;
    }
  }
  if (keyCode === 39) {
    leftSideOfSquare += 50;
    // if (startingX + 50)
    if (leftSideOfSquare + squareWidth >= 500) {
      leftSideOfSquare = 500 - squareWidth;
    }
  }
  if (keyCode === 37) {
    leftSideOfSquare -= 50;
    if (leftSideOfSquare <= 0) {
      leftSideOfSquare = 0;
    }
  }

  if (keyCode === 40) {
    topSideOfSquare += 50;
    if (topSideOfSquare + squareHeight >= 500) {
      topSideOfSquare = 500 - squareHeight;
    }
  }

  if (keyCode === 87) {
    squareHeight += 10;
    topSideOfSquare -= 10;
  }

  if (keyCode === 68) {
    squareWidth += 10;
  }

  if (keyCode === 65) {
    leftSideOfSquare -= 10;
    squareWidth += 10;
  }

  if (keyCode === 83) {
    squareHeight += 10;
  }
}

function draw() {
  // console.log("2nd draw, on and on");
  background("orange");
  rect(leftSideOfSquare, topSideOfSquare, squareWidth, squareHeight);
}

function setup() {
  // console.log("1st setup");
  createCanvas(500, 500);
}
