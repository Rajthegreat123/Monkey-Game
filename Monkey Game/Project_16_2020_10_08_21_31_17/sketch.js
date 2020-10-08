
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime = 0;
var score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(80, 400, 20, 20);  
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2

  ground = createSprite(300,475,600,20);
  ground.velocityX = -5
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount / frameRate())
  text("Survival Time: "+ survivalTime, 100,50); 
  
  //ground.velocityX = ground.width / 2;
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  
  if(keyDown("space")&& monkey.y >= 180) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  console.log(ground.x)
  
  spawnObstacles();
  food();
  drawSprites();
}

function food(){
  if (World.frameCount % 80 == 0){
    banana=createSprite(610,Math.round(random(120, 200)),20,20);
    banana.addImage(bananaImage)
    banana.scale = 0.15;
    banana.velocityX = -5;
    banana.lifetime = 120;
    
    bananaGroup.add(banana)
  }
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(610,430,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -10;             
   obstacle.scale = 0.20;
   obstacle.lifetime = 120;
   
   obstacleGroup.add(obstacle);
 }
}
