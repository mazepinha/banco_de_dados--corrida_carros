class Game {
  constructor() {
    this.resetTitle=createElement("h2");
    this.resetButton=createElement("");
    this.leaderTitle=createElement("h2");
    this.leader1=createElement("h2");
    this.leader2=createElement("h2");
  }

  //criando o objeto do formulario e o novo jogador
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();

    car1 = createSprite(width/2-50,height-100);
    car1.addImage("car1", car1Img);
    car1.scale=0.07;

    car2 = createSprite(width/2+100,height-100);
    car2.addImage("car2", car2Img);
    car2.scale=0.07;

    cars=[car1,car2];
  }

  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
    });
    

  }
  update(state){
    database.ref("/").update({gameState: state});
  }

  hideElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");

    this.resetTitle.html("Reiniciar o Jogo");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width/2+230,100);

    this.leaderTitle.html("Placar");
    this.leaderTitle.class("resetText");
    this.leaderTitle.position(width/3-60,40);

    this.leader1.class("leadersText");
    this.leader1.position(width/3-50,80);

    this.leader2.class("leadersText");
    this.leader2.position(width/3-50,130);
  }

play(){
this.hideElements();
Player.getPlayersInfo();

if (allPlayers!==undefined){
  image(pistaImg,0,-height*5,width,height*6)

  this.showLeader();

  var index=0;
  for (var plr in allPlayers){
    index=index+1;
    var x=allPlayers[plr].positionX
    var y=height-allPlayers[plr].positionY

    cars[index-1].position.x=x;
    cars[index-1].position.y=y;

    if (index==player.index){
      stroke(10);
      fill("red");
      ellipse(x,y,60,60);

      //deixar a camera mirando em você
      camera.position.x=cars[index-1].position.x;
      camera.position.y=cars[index-1].position.y;
    }

    

  }

  this.playerControls();

  drawSprites();
}

}

playerControls(){
  if (keyIsDown(UP_ARROW)){
    player.positionY +=10;
    player.update();
  }
    if (keyIsDown(DOWN_ARROW)){
      player.positionY -=10;
      player.update();
    }  
  
    if (keyIsDown(RIGHT_ARROW)){
      player.positionX -=10;
      player.update();
    } 

      if (keyIsDown(LEFT_ARROW)){
        player.positionX +=10;
        player.update();
    }  

}

showLeader(){
 var leader1, leader2;
 var players=Object.values(allPlayers);

 if (players[0].rank==0 && players[1].rank==0 || players[0].rank==1){
  leader1=players[0].rank +"&emsp;"+players[0].name+"&emsp;"+players[0].score;
  leader2=players[1].rank +"&emsp;"+players[1].name+"&emsp;"+players[1].score;
 }

if (player[1].rank==1){
  leader1=players[1].rank +"&emsp;"+players[1].name+"&emsp;"+players[1].score;
  leader2=players[0].rank +"&emsp;"+players[0].name+"&emsp;"+players[0].score;
  }

  this.leader1.html(leader1);
  this.leader2.html(leader2);
 

}



}