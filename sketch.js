var garden,rabbit,apple,red,orange; 
var gardenImg,rabbitImg,appleImg,redImg,orangeImg; 
var invisibleBoundary1,invisibleBoundary2;

function preload(){ 
 gardenImg = loadImage("garden.png")
 rabbitImg = loadImage("rabbit.png"); 
 appleImg = loadImage("apple.png"); 
 orangeImg = loadImage("orangeLeaf.png"); 
 redImg = loadImage("redImage.png"); 
} 
 

function setup(){ 
  createCanvas(400,400); 
  // Moving background 
 garden=createSprite(200,200);         
 garden.addImage(gardenImg); 
   
   //creating boy running 
   rabbit = createSprite(180,340,30,30); 
   rabbit.scale =0.09; 
   rabbit.addImage(rabbitImg); 


   invisibleBoundary1=createSprite(10,200,20,400)
   invisibleBoundary1.visible=false;
   
   invisibleBoundary2=createSprite(390,200,20,400)
   invisibleBoundary2.visible=false;
   

} 

function draw() { 
  background(0); 
  edges= createEdgeSprites(); 
  rabbit.collide(edges);  
  rabbit.x=World.mouseX;
  
  //rabbit collideinvisibleBoundary
  rabbit.collide(invisibleBoundary1);
  rabbit.collide(invisibleBoundary2);
  



  drawSprites(); 

 var select_sprites= Math.round(random(1,3));
  
  if(frameCount % 80 == 0){
   if (select_sprites ==1 ){
    createApples();
   }else if(select_sprites==2) {
     createorange();
  
  }
    else{
      
      createred();
    }
  }
}


function createApples(){
apple = createSprite((random(50, 350)),40, 10, 10); 
apple.addImage(appleImg);
apple.scale=0.07; 
apple.velocityY=3;  
apple.lifetime = 100;
}

function createred(){
red = createSprite(random(50,350),40,10,10)  
red.addImage(redImg);
red.scale=0.07; 
red.velocityY=3; 
}

  function createorange(){
orange = createSprite(random(50,350),40,10,10) 
orange.addImage(orangeImg);
orange.scale=0.07; 
orange.velocityY=3; 
}