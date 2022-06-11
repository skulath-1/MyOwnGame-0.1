var girl,railway,prison,stone;
var girlImg,railwayImg,prisonImg,stoneImg;
var gameState="play";




function preload(){

girlImg = loadImage("girlRunning.png")
railwayImg = loadImage("RailwayImg.png")
prisonImg = loadImage("prisonImag.png")
stoneImg = loadImage("stone.png")


}

function setup() {
  createCanvas(800,500)

  girl = createSprite(400,400,100,100)
  girl.addImage("girlImg",girlImg)
  girl.scale=0.3

  railway = createSprite(400,250,800,500)
  railway.addImage("RailwayImg",railwayImg)
  railway.scale= 2

  //adding depth
  girl.depth=railway.depth
  girl.depth=girl.depth+1
 
}

function draw() {
    background("railwayImg")

    if (gameState==="play"){
     
     if (keyDown("left_arrow")){
       girl.x= girl.x-3
     }

     if (keyDown("right_arrow")){
       girl.x= girl.x+3
     }

     if (keyDown("space")){
       girl.velocityY=-4
     }
    
    //adding gravity
     girl.velocityY=girl.velocityY+10

     //infite scorrling effect
     if(railway.y > 400){
      railway.y = 300
    }


   
    
     
     
    }




drawSprites();
}