const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var ground;
var Ball;

//base blocks
var Base1, Base2, Base3, Base4, Base5;
var Bass1, Bass2, Bass3, Bass4, Bass5;

//middle blocks
var mid1, mid2, mid3;
var middle1, middle2, middle3;

//top blocks
var Head;
var head;

//stands
var legs1, legs2;
var slab1, slab2;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
    world = engine.world;

// leg day
  legs1 = new Ground(400, 390, 15, 59);
//  legs2 = new Ground(700, 340, 15, 120);

// slabs as stands for the blocks
 slab1 = new Ground(400, 360, 175, 10);
//  slab2 = new Ground(700, 280, 240, 10);

//base type 1
  Bass1 = new Box(325, 295, 30, 30);
  Bass2 = new Box(355, 295, 30, 30);
  Bass3 = new Box(385, 295, 30, 30);
  Bass4 = new Box(415, 295, 30, 30);
  Bass5 = new Box(445, 295, 30, 30);

// //base type 2 
//   Base1 = new Box();
//   Base2 = new Box();
//   Base3 = new Box();
//   Base4 = new Box();
//   Base5 = new Box();
   
//middle type 1
  mid1 = new Box(355,255, 30, 30);
  mid2 = new Box(385,255, 30, 30);
  mid3 = new Box(415,255, 30, 30);

// //middle type 2 
//   middle1 = new Box();
//   middle2 = new Box();
//   middle3 = new Box();

//the top
  Head = new Box(395, 225, 30, 30)
//  head = new Box()
 
 Ball = new Ballss(120, 125, 10, 10);
// Ball.body.debug = true

 //Ball.setCollider("Circle", 0, 0, 10, 10, 0);

 slingshot = new Cata(Ball.body,{x: 175, y:300})
}

function draw() {
  background(0);  

 Engine.update(engine);

  // Base1.display();
  // Base2.display();
  // Base3.display();
  // Base4.display();
  // Base5.display();

  Bass1.display();
  Bass2.display();
  Bass3.display();
  Bass4.display();
  Bass5.display();

  mid1.display();
  mid2.display();
  mid3.display();

  // middle1.display();
  // middle2.display();
  // middle3.display();

  legs1.display();
 // legs2.display();

  slab1.display();
 //  slab2.display();

   Head.display();
  // head.display();
  
  slingshot.display()
  ellipse(Ball.body.position.x, Ball.body.position.y, 25, 25)

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Ball.body, {x: mouseX, y: mouseY})

}

function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32 ){
    Ball.x = 200
    Ball.y = 200
    slingshot.attach(Ball.Body);
      
  }
}

