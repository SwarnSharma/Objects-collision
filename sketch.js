var rectf,rect2;



function setup() {
  createCanvas(800,400);
  rectf=createSprite(200,200,50,80);
  rectf.shapeColor="green";
  rect2=createSprite(150,200,80,50);
  rect2.shapeColor="green";
}

function draw() {
  background(255,255,255);
  rect2.x=World.mouseX;
  rect2.y=World.mouseY;

  if(rect2.x-rectf.x<rectf.width/2+rect2.width/2 && 
    rectf.x-rect2.x<rectf.width/2+rect2.width/2 &&
    rect2.y-rectf.y<rectf.height/2+rect2.height/2 && 
    rectf.y-rect2.y<rectf.height/2+rect2.height/2 ){
  rectf.shapeColor="red";
  rect2.shapeColor="red";
  }else {
    rectf.shapeColor="green";
  rect2.shapeColor="green";
  }



  
  drawSprites();
}