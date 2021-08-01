var ball1;
var dustbin1;
var dustbin2;
var dustbin3;
var ground;
var engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){ }
  
  function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
  ball1=new Ball(70,590,0)
	dustbin1=new Dustbin(width/1.2,610,100,21)
  dustbin2=new Dustbin(620,570,21,100);
  dustbin3=new Dustbin(710,570,21,100);
   ground=new Ground(850/2,715,900,200.5)
  //running engine
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(255,215,0);
  //display
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  keyPressed();
  drawSprites();
}
 function keyPressed() {
  if (keyCode===DOWN_ARROW)
   {
  Matter.Body.applyForce(ball1.Body,ball1.Body.position,{x:85,y:-85});
  }
 }



