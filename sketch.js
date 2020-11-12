
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  dustbin = new Dustbin(552,654,185,13);
 // platform = new Dustbin(150, 305, 300, 170);
 dustbin1 = new Dustbin1(455,630,20,80);
disbin2 = new Dustbin(654,630,20,80);

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	//Create the Bodies Here.
  ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
  World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  strokeWeight(4);
  fill(280,200,200);
  ellipse(50,650,20,20);
  dustbin.display();
  dustbin1.display();
  disbin2.display();

  drawSprites();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW)  {
   Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}



















