
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(200,450,40);
	dustbin=new Dustbin(1200,650);
	ground=new Ground(width/2,670,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  dustbin.display()
  ground.display()

  
  
  drawSprites();
 
}

function  keyPressed(){

if(keyCode===UP_ARROW){
	Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:85})
}

}



