
//PHYSICS ENGINE by ARYA

//Declare variables for game objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var userEngine,userWorld;
var ball,ground;

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1200, 700);

  userEngine = Engine.create();
  userWorld = userEngine.world;
  
   createSprite(400, 200, 50, 50);

   //construction of ground object using matter.js
   var ground_options = {
     isStatic: true
   }
   ground = Bodies.rectangle(600,450,1200,10,ground_options);
   World.add(userWorld, ground);
   console.log(ground);

   //construction of ball using matter.js
   var ball_options = {
     restitution: 0.8
   }
   ball = Bodies.circle(200,200,20,ball_options);
   World.add(userWorld,ball);
   console.log(ball);

}


//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed, checked, continuously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(0);

  Engine.update(userEngine);

  drawSprites();

  fill("blue");
  rectMode(CENTER);
  rect(600,200,50,50);

  //display of ground using matter.js
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,10);

  //display of ball using matter.js
  fill("yellow");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);
  }

 


