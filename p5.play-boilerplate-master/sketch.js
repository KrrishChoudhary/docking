var  iss;
var  spacecraft ;
var  hasDocked = false;
function preload(){

 issImage = loadImage("image/iss.png")
 spaceImage = loadImage("image/spacebg.jpg")
 spacecraft1Image = loadAnimation("image/spacecraft1.png")
 spacecraft2Image = loadAnimation("image/spacecraft2.png")
 spacecraft3Image = loadAnimation("image/spacecraft3.png")
 spacecraft4Image = loadAnimation("image/spacecraft4.png")



}

function setup() {
  createCanvas(1500,720);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale = 1.3

  spacecraft = createSprite(random(15,1520), 520);
  spacecraft.addAnimation("still",spacecraft1Image)
  spacecraft.scale = 0.3

  
  issdock= createSprite(310, 240, 5, 5) 
  issdock.visible=false

  
}

function draw() {
  background(spaceImage);  
  if(!hasDocked){

   if (keyDown(UP_ARROW)){
   
    spacecraft.addAnimation("up", spacecraft2Image);
    spacecraft.changeAnimation("up")
    spacecraft.y = spacecraft.y - 3;
   
   }
   
   if (keyDown(DOWN_ARROW)){
   
    spacecraft.addAnimation("down", spacecraft2Image);
    spacecraft.changeAnimation("down")
    spacecraft.y = spacecraft.y + 3;
   
   }
   if (keyDown(LEFT_ARROW)){
   
    spacecraft.addAnimation("left", spacecraft3Image);
    spacecraft.changeAnimation("left")
    spacecraft.x = spacecraft.x - 3;
   
   }

   if (keyDown(RIGHT_ARROW)){
   
    spacecraft.addAnimation("right", spacecraft4Image);
    spacecraft.changeAnimation("right")
    spacecraft.x = spacecraft.x + 3;

   
   }
 
  }
 
  if(spacecraft.isTouching(issdock)){
   hasDocked=true;
    fill("White") 
    textSize(30) 
    text("Docking Successful!", 660, 660); }
 
 
 
  drawSprites();

 
}