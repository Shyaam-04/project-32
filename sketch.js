const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball;
var ground;
var slingShot;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  //createSprite(400, 200, 50, 50);
  ball = new Ball(100,250,50,50);
  block1 = new Building(450,300,30,40);
  block2 = new Building(450,260,30,40);
  block3 = new Building(450,220,30,40);
  block4 = new Building(450,180,30,40);
  block5 = new Building(450,140,30,40);
  block6 = new Building(450,100,30,40);
  block7 = new Building(450,60,30,40);
  block8 = new Building(480,300,30,40);
  block9 = new Building(480,260,30,40);
  block10 = new Building(480,220,30,40);
  block11 = new Building(480,180,30,40);
  block12 = new Building(480,140,30,40);
  block13 = new Building(480,100,30,40);
  block14 = new Building(480,60,30,40);

  block15 = new Building(570,300,30,40);
  block16 = new Building(570,260,30,40);
  block17 = new Building(570,220,30,40);
  block18 = new Building(570,180,30,40);
  block19 = new Building(570,140,30,40);
  block20 = new Building(570,100,30,40);
  block21 = new Building(600,300,30,40);
  block22 = new Building(600,260,30,40);
  block23 = new Building(600,220,30,40);
  block24 = new Building(600,180,30,40);
  block25 = new Building(600,140,30,40);
  block26 = new Building(600,100,30,40);

  block27 = new Building(690,300,30,40);
  block28 = new Building(690,260,30,40);
  block29 = new Building(690,220,30,40);
  block30 = new Building(690,180,30,40);
  block31 = new Building(690,140,30,40);
  block32 = new Building(690,100,30,40);
  block33 = new Building(690,60,30,40);
  block34 = new Building(690,20,30,40);
  block35 = new Building(720,300,30,40);
  block36 = new Building(720,260,30,40);
  block37 = new Building(720,220,30,40);
  block38 = new Building(720,180,30,40);
  block39 = new Building(720,140,30,40);
  block40 = new Building(720,100,30,40);
  block41 = new Building(720,60,30,40);
  block42 = new Building(720,20,30,40);

  slingShot = new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  background(0);  
  //Engine.update(engine);
  ground.display();
  ball.display();
  fill("purple");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("red");
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill("white");
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();

  slingShot.display();
  
  //drawSprites();
}