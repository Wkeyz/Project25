
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor, ball, box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Floor(200,380);
	ball = new Paper(80,360,70);
	ball.scale=0.1;
	box1 = new Dustbin(550,360,100,100);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  floor.display();
box1.display();

ball.display();
  drawSprites();

}
function keyPressed() {
	
	if (keyCode === UP_ARROW) {
		console.log("hi Vikshar");
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:0.3,y:-1.5});
  
	}
}
