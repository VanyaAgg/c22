//3 classes - Matter.Engine , Matter.World, Matter.Bodies
//namespacing
//physics engine
const Engine = Matter.Engine;

//Matter.World is the world that is inside the engine. 

const World = Matter.World;


//Matter.Bodies - the objects inside the world which follow rules of physics
const Bodies = Matter.Bodies;


//create my own engine 
var engine;
var world;
var object;
var ball;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world =  engine.world;


    var options = {
      isStatic: true
    }

    //gets created only in the memory of the computer
    //change the props i need to pass some options 
  object = Bodies.rectangle(400,390,800,20,options);
  World.add(world,object);

  console.log(object);
  console.log(object.position.x);
console.log(object.position.y);


var ball_options = {
  restitution: 1.5
}

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

console.log(ball);


}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,20);


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
 
}