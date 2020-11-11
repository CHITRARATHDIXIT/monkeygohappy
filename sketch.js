
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,200);
  
monkey = createSprite(40,160,20 , 20);
monkey.addAnimation("monkey" , monkey_running);
monkey.scale=0.1;
  
foodGroup = new Group();
 obstacleGroup = new Group();
  
  

ground=createSprite(250,185,500,10);
ground.velocityX=-2;
ground.x=ground.width/2;
console.log(ground.x); 
  
  
}


function draw() {
background("red");
  
 if(ground.x<250){
  ground.x=ground.width/2;
 
}

  monkey.collide(ground); 
  if(keyDown('space') && monkey.y>149){
    
  monkey.velocityY=-12;
  
    
  }
  monkey.velocityY = monkey.velocityY+0.8;
 console.log(monkey.y);
     
                                                            
  
  
  if(foodGroup.isTouching(monkey)){
     banana.visible=false;
     }
  
  if(obstacleGroup.isTouching(monkey)){
     obstacleGroup.setVelocityEach(0,0);
     foodGroup.setVelocityEach(0,0);
      obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    score=score=0;
     }
  
  
  
  
 banan(); 
 obstacl(); 
  
  
 text(" SURVIVAL TIME " + score,150,10);
  
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
 
  
  
drawSprites();
  

  
  
}

function banan(){
  if (frameCount % 160 === 0) {
      banana = createSprite(500,50,10,10);
      banana.addImage("banana" , bananaImage);
      banana.scale=0.09;
      banana.velocityX=-3;
      banana.lifetime=170;
      banana.y = Math.round(random(30,72)); 
      foodGroup.add(banana);
    
  }  
}

function obstacl(){
if(frameCount % 140 === 0){
  obstacle=createSprite(450,160,10,10);
  obstacle.addImage("obstacle" , obstaceImage);
  obstacle.scale=0.1
  obstacle.velocityX=-3;
  obstacleGroup.add(obstacle);
  
  
  
  
  
  
  
}  
  
  
  
  
  
  
  
}


