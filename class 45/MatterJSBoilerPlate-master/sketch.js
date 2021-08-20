
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score;

var PLAY= 1;
var END = 0;
var gameState 
var fruit1Group,fruit2Group,fruit3Group,fruit4Group;
function preload()
{
	backgroundimage = loadImage("bg.jpg");
	sofiaimage = loadImage("knife-removebg-preview.png");
	fruit1image = loadImage("apple.png")
	fruit2image = loadImage("banana.png")
	fruit3image = loadImage("mango.png")
	fruit4image = loadImage("orange.png")
	//fruit5image = loadImage("fruits-3-unscreen.gif")
	//fruit6image = loadImage("fruits-4-unscreen.gif")
}
function setup() {
	createCanvas(800, 700);

	bg = createSprite(320,200,100,200);
	bg.addImage(backgroundimage);
	bg.scale = 2.1
	text("Score: "+ score, 500,50);
	

	fruitGroup = new Group();

	engine = Engine.create();
	world = engine.world;

	 sofia=createSprite(51,41,10,10)
	sofia.addImage(sofiaimage);
	sofia.scale = 0.04;

	fruit1 = createSprite (random(50,200),random(100,200))
	
	
	fruit1.addImage(fruit1image)
	fruit1.scale = 0.1

	fruit2 = createSprite (random(80,400),random(90,300))
	fruit2.addImage(fruit2image)
	fruit2.scale = 0.1

	fruit3 = createSprite  (random(150,240),random(190,780))
	fruit3.addImage(fruit3image)
	fruit3.scale = 0.2
	
    fruit4 = createSprite  (random(260,190),random(390,100))
	fruit4.addImage(fruit4image)
	fruit4.scale = 0.1


 wall1=createSprite(118,8,10,190)
 wall2=createSprite(1,164,290,10)
 wall3=createSprite(174,3,10,490)
 wall4=createSprite(0,116,160,10)
 wall5=createSprite(1,204,190,10)
 wall6=createSprite(91,204,10,130)
 wall7=createSprite(138,395,10,190)
 wall8=createSprite(40,294,100,10)
 wall9=createSprite (46,364,10,100)
 wall10=createSprite(88,395,190,10);
 wall11=createSprite(300,232,160,10)
 wall12=createSprite(304,217,10,250)
 wall13=createSprite(396,332,390,10)
 wall14=createSprite(203,390,10,190)
 wall15=createSprite(395,83,190,10)
 wall16=createSprite(296,124,140,10)
 wall17=createSprite(249,38,190,10)
 wall18=createSprite(396,1,10,10)


	Engine.run(engine);
  
}


function draw() {
	


  rectMode(CENTER);
  background(0);
 
	
	
 
   
  if(fruit1.isTouching(sofia))
  {
 
fruit1.destroy();
score = score +1  

  }

  if(fruit2.isTouching(sofia))
  {
 
fruit2.destroy();
score = score +1 

  }
	
  if(fruit3.isTouching(sofia))
  {
 
fruit3.destroy();
score = score +1 

  }

  if(fruit4.isTouching(sofia))
  {
 
fruit4.destroy();
score = score +1 

  
}
  
	if(keyDown(UP_ARROW)) {
	  sofia.velocityX = 0;
	  sofia.velocityY = -2;
	
	}
	if(keyDown(DOWN_ARROW)) {
	  sofia.velocityX = 0;
	  sofia.velocityY = 2;
	}
	if(keyDown(RIGHT_ARROW)) {
	  sofia.velocityX = 2;
	  sofia.velocityY = 0;
	}
	
	if(keyDown(LEFT_ARROW)) {
	  sofia.velocityX = -2;
	  sofia.velocityY = 0;
	}
	
	  if (sofia.isTouching(wall1)||
	  sofia.isTouching(wall2)||
	  sofia.isTouching(wall3)||
	  sofia.isTouching(wall4)||
	  sofia.isTouching(wall5)||
	  sofia.isTouching(wall6)||
	  sofia.isTouching(wall7)||
	  sofia.isTouching(wall8)||
	  sofia.isTouching(wall9)||
	  sofia.isTouching(wall11)||
	  sofia.isTouching(wall12)||
	  sofia.isTouching(wall13)||
	  sofia.isTouching(wall14)||
	  sofia.isTouching(wall15)||
	  sofia.isTouching(wall16)||
	  sofia.isTouching(wall17)) {
	  sofia.x=51;
	  sofia.y=41;
	  sofia.velocityX=0;
	  sofia.velocityY=0;
	  }
   
   if(sofia.isTouching(wall10)){
	text("you loose",267,355);
   textSize(15);
	 
   }
   if(sofia.isTouching(wall18)){
	text("you win",267,355);
   textSize(15);
	 
   }
   
   
	
  
 
  drawSprites();
 
}

function fruits()
{
  if(frameCount%100 === 0){
    
  fruit = createSprite(500,200,20,20);
 
    sf = Math.round(random(1,4))
    
    if(sf ===1)
    {
      fruit.addImage(fruit1)
      
    }
    else if(sf ===2 )
    {
      fruit.addImage(fruit2)
      
    }
    else if(sf ===3)
    {
      
      fruit.addImage(fruit3)
    
    }
    else
    {
      fruit.addImage(fruit4)
      
    }
    
    
    fruit.scale = 0.2;
    
    fruit.y=Math.round(random(50,350));
    
    fruit.velocityX =-8;
     
    fruit.lifetime = 110;
  
    fruitGroup.add(fruit)
    
    
    //To make fruit appear from both sides
  changefruit=Math.round(random(1,2))
  if(changefruit===1)
    {
      fruit.velocityX=-(8+score/4);
      fruit.x=500;
    }
    else if(changefruit===2)
    {
      fruit.velocityX=(8+score/4);
      fruit.x=0;
    }
  }
  
    
}


