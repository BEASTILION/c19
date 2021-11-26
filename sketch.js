var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200 , 200 , 50 , 50)
  ghost.addImage("bhoot",ghostImg)
  ghost.scale = .3
  

  doorsGroup = new Group()
  climbersGroup = new Group()

}


function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites()
    spawndoors()


 if (keyDown("Space")){
 ghost.velocityY= -5

 }

 if (keyDown("Left_Arrow")){
  ghost.x -= 2 
 
  }

  if (keyDown("RIGHT_Arrow")){
    ghost.x +=2
   
    }

    if (climbersGroup.isTouching(ghost)|| doorsGroup.isTouching(ghost)){
      ghost.velocityY = 0 
      doorsGroup.setVelocityYEach(0)
      tower.velocityY = 0
      climbersGroup.setVelocityYEach(0)
      }
  
  



 ghost.velocityY += 0.8
}
function spawndoors(){
if(frameCount % 240 === 0){

door = createSprite(200,-50)
door.velocityY = 4
door.addImage("darvaja",doorImg)
doorsGroup.add(door)
doorsGroup.lifetime = 50
climber = createSprite(200, 10 )
climber.addImage("okclimber",climberImg)
climbersGroup.add(climber) ;

door.x = Math.round(random(120,400));
climber.x = door.x;
climber.velocityY = 4

}


}