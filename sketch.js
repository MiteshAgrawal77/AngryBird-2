const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, box1, box2
var pig1, log1

var box3,box4;
var pig2, log2;

var box5,log3,log4

var bird

var bg

function preload(){

   bg = loadImage("sprites/bg.png")

}

function setup() {
  createCanvas(800,400);
 
  myengine = Engine.create();
  myworld = myengine.world;
  
   

  ground  = new Ground(400,390,800)
  box1 = new Box(300,300,70,70)
  box2 = new Box(500,300,70,70);
  box3 = new Box(300,180,70,70)
  box4 = new Box(500,180,70,70) 
  box5 = new Box(400,50,70,70);
  
  pig1 = new Pig(400,300)
  pig2 = new Pig(400,180)
  //360 = 2PI
  //PI = 360/2
  //PI = 180

  log1 = new Log(400,250,300,PI)
  log2 = new Log(400,100,300,PI)

  log3 = new Log(460,20,150,PI/5)
  log4 = new Log(330,20,150,-PI/5)

  bird = new Bird(50,50)
  

}

function draw() {
  Engine.update(myengine)
  background(bg);  

  bird.body.position.x = mouseX
  bird.body.position.y = mouseY

  ground.display()

  box1.display()
  box2.display()
  box4.display()
  box3.display()
  box5.display()

  pig1.display()
  pig2.display()
  
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  
  bird.display() 
 
}