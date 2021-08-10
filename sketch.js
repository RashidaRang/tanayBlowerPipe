const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



var engine,world,blower,blowerMouth,button,ball;

function preload(){



}

function setup() {
  createCanvas(400,400);
  
  
 
  engine = Engine.create();
  world = engine.world;
 //(x,y,width,height); 
 blower = new Blower(250,200,100,100);
 blowerMouth = new BlowerMouth(150,240,100,20);
 ball = new Ball(250,0,50,50);
 
 button = createButton('click to blow')
  button.position(width/2,height - 100)
  button.class("blowButton");
  button.mousePressed(blow);
}





function draw() {
  background(0);  
  Engine.update(engine);
  
 ball.show();
 blowerMouth.show();
 blower.show();
}

function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.05});
}
