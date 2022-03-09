
var trex ,trex_running,ground
function preload(){
  trex_running=loadAnimation("trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  ground=createSprite(300,200,600,20)
 trex=createSprite(50,150,20,50)
 trex.addAnimation("run",trex_running)
 trex.scale=0.5;
 trex.x=50
}

function draw(){
  background("black")
  if(keyDown("space"))
  {
    trex.velocityY=-8
  }
  trex.velocityY+=0.5
  trex.collide(ground)
drawSprites();
}
