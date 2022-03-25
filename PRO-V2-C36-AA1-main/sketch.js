var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var pistaImg, car1Img, car2Img;
var car1, car2, pista;
var allPlayers;
var cars=[];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  pistaImg = loadImage("./assets/PISTA.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
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

  if (playerCount==2){
    game.update(1)
  }
if (gameState==1){
  game.play();
}




}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
