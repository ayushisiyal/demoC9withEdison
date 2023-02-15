var box;

function setup() {
  createCanvas(600,600);
  box= createSprite(300,300,30,40);
  box1= createSprite(200,300,30,40);
  box.shapeColor= "red";
  box.velocityX=-2;
  box.velocityY=5;

  box1.shapeColor= "green";
  box1.velocityX=-4;
  box1.velocityY=-5;
  edges=createEdgeSprites();
}

function draw() 
{
  background("purple");
  box.bounceOff(edges);// topEdge, bottomEdge, leftEdge, rightEdge
  box1.bounceOff(edges);
  drawSprites();
}

///setup fn wil run once
//draw fn will run in a loop


