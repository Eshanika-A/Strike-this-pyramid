const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon, polygonImg, sling;
var g1,g2,g3;
var b1,b2,b3,b4,b5, b6,b7,b8,b9,b10, b11,b12,b13,b14,b15,b16,b17,b18,b19,b20, b21,b22,b23,b24,b25;

function preload(){
    polygonImg=loadImage("polygon.png");
  }

  function setup() {
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

   polygon = Bodies.circle(50,50,20);
   World.add(world, polygon);

    g1=new Ground(390,300,250,10);
    g2 = new Ground(700,200,250,10);

    b1 = new Box(300,275,30,40);   
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);
    b8 = new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10 = new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);
    b13 = new Box(360,195,30,40);
    b14 = new Box(390,195,30,40);
    b15 = new Box(420,195,30,40);
    b16 = new Box(390,155,30,40);
    b17 = new Box(640,135,30,40);
    b18 = new Box(670,135,30,40);
    b19 = new Box(700,135,30,40);
    b20 = new Box(730,135,30,40);
    b21 = new Box(760,135,30,40);
    b22 = new Box(670,95,30,40);
    b23 = new Box(700,95,30,40);
    b24 = new Box(730,95,30,40);
    b25 = new Box(700,55,30,40);

    g3=new Ground(500,490,1000,20);

   sling = new Slingshot(this.polygon,{x:100,y:200});
  }

  function draw() {

    background("brown"); 
    Engine.update(engine)
 
    g1.display();
    g2.display();
    g3.display();
  
    fill("blue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("pink");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("cyan");
    b13.display();
    b14.display();
    b15.display();
    fill("yellow");
    b16.display();  
    fill("blue");
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    fill("pink");
    b22.display();
    b23.display();
    b24.display();
    fill("yellow");
    b25.display();
    sling.display(),

     imageMode(CENTER)
     image(polygonImg ,polygon.position.x,polygon.position.y,40,40);
    

     fill("white");
     textSize(20);
     text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,50);
    
  }


   function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    sling.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);
    }
  }