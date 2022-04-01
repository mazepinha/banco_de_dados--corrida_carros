var canvas;
var backgroundImage, car1_img, car2_img, pistaImg;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var fuels, bitcoin, obstacles;
var fuelImg, bitcoinImg, lifeImg, obstacle1Img, obstacle2Img;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  pistaImg = loadImage("../assets/PISTA.png");
  bitcoinImg = loadImage("../assets/bitcoin.webp");
  fuelImg = loadImage("../assets/fuel.png");
  obstacle1Img = loadImage("../assets/obstacle1.png");
  obstacle2Img = loadImage("../assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
