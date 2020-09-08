
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,670,800,20)

	//ball1 = new Ball(400,350,10);

	bin1 = new Bin(400,670,70,10);
   // bin2 = new Bin(920,320,70,70);
   // bin3 = new Bin(700,240,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display(); 
// ball1.display();



 bin1.display();
 //bin2.display();
// bin3.display();

 
  drawSprites();
 
}



