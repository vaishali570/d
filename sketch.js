var spacecraft1 ;
var spacecraft2;
var spacecraft3;
var spacecraft4;
var bg;
var iss,issImg,hasDocked=false;

function preload(){
bg=loadImage(bg,"spacebg.jpg")
spacecraft1=loadImage("spacecraft1.png")
spacecraft2=loadImage("spacecraft2.png")
spacecraft3=loadImage("spacecraft3.png")
spacecraft4=loadImage("spacecraft4.png")
issImg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
canvas.addImage(bg);

iss=createSprite(200,200,50,50)
iss.addAnimation(issImg)
iss.scale=12

spacecraft=createSprite(300,250,50,50)
spacecraft=addAnimation(spaceCraft1)



}



function draw() {
  background(255,255,255);
  
  if (!hasDocked){
    spaceCraft.setPosition.X(200);
    spacecraft.setPosition.y(350);

    if(keyPressed(Left_arrow)){
      spacecraft3.addImage(spacecraft3)
      spacecraft.velocityX=0.3;
    }

    if(keyPressed(right_arrow)){
      spacecraft4.addImage(spacecraft4);
      spacecraft4.velocityY=0.3;
    }

    if (keyPressed(up_arrow)){
      spacecraft.setVelocityY=1;
    }
    
    if(keyPressed(down_arrow)){
      spacecraft.addImage(spacecraft2)
    }

if (spacecraft.isTouchin(iss)){
  hasDocked=true;
  text ("Docking Sucessful",400,520,20,20)
}



  }



  drawSprites();
}