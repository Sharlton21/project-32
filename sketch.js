const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygon_img;
var backgroundImg
var bg="bg.png";
var score=0;
function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundIMG();
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  createSprite(400, 200, 50, 50);
  Ground=new ground();
  Block1=new block(330,235,30,40);
  Block2=new block(360,235,30,40);
  Block3=new block(390,235,30,40);
  Block4=new block(420,235,30,40);
  Block5=new block(450,235,30,40);
  Block6=new block(360,195,30,40);
  Block7=new block(390,195,30,40);
  Block8=new block(420,195,30,40);
  Block9=new block(390,155,30,40);
  Stand=new stand(390,300,250,10);

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  SlingShot=new slingShot(this.polygon,{x:100,y:200});
}
function draw() {
  if(backgroundImg)
   background(backgroundImg);

  noStroke();
  textSize(35);
  fill("white");
  text("SCORE:"+score,500,40);

  
  Block1.display();
  Block1.score();
  Block2.display();
  Block2.score();
  Block3.display();
  Block3.score();
  Block4.display();
  Block4.score();
  Block5.display();
  Block5.score();
  Block6.display();
  Block6.score();
  Block7.display();
  Block7.score();
  Block8.display();
  Block8.score();
  Block9.display();
  Block9.score();
  Ground.display();
  SlingShot.display();
  Stand.display();
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  //}
}
function mouseReleased(){
  SlingShot.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
    SlingShot.attach(this.polygon);
  }
}
async function getBackgroundIMG(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime=responseJSON.datetime
  var hour=datetime.slice(3,5); 

  if(hour>=06&& hour<=19){
    bg="bg.png";
  }
  else{
    bg="bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}


