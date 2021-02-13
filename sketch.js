const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground, ball

function setup(){
var canvas = createCanvas(400, 400);
engine = Engine.create();
world = engine.world;

var options = {
isStatic: true
}

ground = Bodies.rectangle(200, 380, 500, 30, options);
World.add(world,ground);

var options1 =  {
  restitution: 0
}

ball = Bodies.circle(200, 100, 20, options1);
World.add(world,ball);

}

function draw(){
  background("black")
Engine.update(engine )

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 500, 30);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20 );
}