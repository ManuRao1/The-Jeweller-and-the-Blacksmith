var w1, w2, w3, w4, w5, w6, w7, w8;
var coin1, coin2, coin3, coin4;
var well, chest, chestUnlocked, chestLoacked;
var player1, player2;
var coin = 0;
var door, doorImage;
var woodenBarrel, woodenCrate, Bucket;
var woodenBarrelImg, woodenCrateImg, BucketImg;
var sword, swordImg, shield, shieldImg

function preload(){
 wellImage = loadImage("well.png")
  coinImage = loadAnimation("Coin_01.png","Coin_02.png","Coin_03.png","Coin_04.png",
  "Coin_05.png","Coin_06.png")
  ladder = loadImage("Ladder_01.png")
  doorImage = loadImage("Wide_Door_02.png")
  ladder2 = loadImage("Ladder_02.png")
  chestLocked = loadImage("Chest_01_Locked.png")
  chestUnlocked = loadImage("Chest_01_Unlocked.png")
  player1Image = loadImage("player1.png")
  player2Image = loadImage("player_2.png")
  sageImage = loadImage("Soldier.png")
  woodenBarrelImg = loadImage("Wooden_barrel.png")
  woodenCrateImg = loadImage("Wooden_crate.png")
  BucketImg = loadImage("Bucket.png")
  swordImg = loadImage("Decor_Sword.png")
  shieldImg = loadImage("Decor_Shield.png")
}

function setup() {
  createCanvas(1000, 650);
  
  door = createSprite(width-50,50)
  door.addImage(doorImage)
  door.scale = 0.4

  woodenBarrel = createSprite(850, 630)
  woodenBarrel.addImage(woodenBarrelImg)
  woodenBarrel.scale = 0.4

  Bucket = createSprite(60,395)
  Bucket.addImage(BucketImg)
  Bucket.scale = 0.4

  sage = createSprite(width-100,60)
  sage.addImage(sageImage)
  sage.scale = 0.1;
  sage.setCollider("rectangle",0,0,500,620)
  
  w1 = createSprite(150, 420);
  w1.addImage(ladder)

  w1.setCollider("rectangle",0,14,340,25)

  w2 = createSprite(700, 380);
  w2.addImage(ladder)
  w2.setCollider("rectangle",0,14,340,25)

  w3 = createSprite(850, 500);
  w3.addImage(ladder)
  w3.setCollider("rectangle",0,14,340,25)

  w4 = createSprite(250, 300);
  w4.addImage(ladder)
  w4.setCollider("rectangle",0,14,340,25)

  w5 = createSprite(800, 230);
  w5.addImage(ladder)
  w5.setCollider("rectangle",0,14,340,25)

  w6 = createSprite(310, 160);
  w6.addImage(ladder)
  w6.setCollider("rectangle",0,14,340,25);

  w7 = createSprite(600, 90);
  w7.addImage(ladder)
  w7.setCollider("rectangle",0,14,340,25);

  w8 = createSprite(830, 90);
  w8.addImage(ladder)
  w8.setCollider("rectangle",0,14,340,25);
  

  well = createSprite(450, 550, 200, 95);
  well.addImage(wellImage)
  well.scale = 0.4
  well.setCollider("rectangle",0,14,340,300);


  chest = createSprite(520, 330, 50, 50);
  chest.addImage(chestLocked)
  chest.scale = 0.8


  player1 = createSprite(50, 600, 30, 30);
  player1.scale = 0.1
  player1.addImage(player1Image)
  player1.setCollider("rectangle",0,0,500,620)
  
  player2 = createSprite(120, 600, 30, 30);
  player2.scale = 0.1
  player2.addImage(player2Image)
  player2.setCollider("rectangle",0,0,500,620)
  
  edges = createEdgeSprites()
  
  coin1 = createSprite(950, 600);
  coin1.addAnimation("coin", coinImage)
  coin1.scale = 0.3;

  coin2 = createSprite(150, 400);
  coin2.addAnimation("coin", coinImage)
  coin2.scale = 0.3;

   coin3 = createSprite(250, 280);
   coin3.addAnimation("coin", coinImage)
   coin3.scale = 0.3;

   coin4 = createSprite(780, 360);
   coin4.addAnimation("coin", coinImage)
   coin4.scale = 0.3;

   coin5 = createSprite(250, 130);
   coin5.addAnimation("coin", coinImage)
   coin5.scale = 0.3;

   coin6 = createSprite(750, 60);
   coin6.addAnimation("coin", coinImage)
   coin6.scale = 0.3;


   coin7 = createSprite(850, 200);
   coin7.addAnimation("coin", coinImage)
   coin7.scale = 0.3;

   sword = createSprite(60, 380)
  sword.addImage(swordImg)
  sword.scale = 0.3

  shield = createSprite(830, 630)
  shield.addImage(shieldImg)
  shield.scale = 0.4

}

function draw() {
  background(0, 0, 0);

  if(player1.isTouching(sword)){
sword.x = player1.x
sword.y = player1.y+20
sword.rotation = 45 

if(sword.isTouching(sage)) {
    sage.destory();
    fill("white")
    textSize(40)
    text(" YOU WON✨🏆 ",70,250)
  }

  }

 
  if(keyDown("E")){
    shield.scale = 1
  } else{
    shield.scale = 0.4
  }


  if(player2.isTouching(shield)){
    shield.x = player2.x
    shield.y = player2.y+25
      }


  fill("white")
  textSize(20)
  text("COIN🏆: " + coin ,50,50)

 if(player1.isTouching(coin1)){
   coin+=10
  coin1.destroy()
 }

 if(player1.isTouching(coin2)){
  coin+=10
 coin2.destroy()
}

if(player1.isTouching(coin3)){
  coin+=10
 coin3.destroy()
}

if(player1.isTouching(coin4)){
  coin+=10
 coin4.destroy()
}

if(player1.isTouching(coin5)){
  coin+=10
 coin5.destroy()
}

if(player1.isTouching(coin6)){
  coin+=10
 coin6.destroy()
}

if(player1.isTouching(coin7)){
  coin+=10
 coin7.destroy()
}

if(player1.isTouching(coin2)){
  coin+=10
 coin2.destroy()
}

if(player1.isTouching(coin3)){
  coin+=10
 coin3.destroy()
}

if(player1.isTouching(coin4)){
  coin+=10
 coin4.destroy()
}

if(player1.isTouching(coin5)){
  coin+=10
 coin5.destroy()
}

if(player1.isTouching(coin6)){
  coin+=10
 coin6.destroy()
}

if(player1.isTouching(coin7)){
  coin+=10
 coin7.destroy()
}
if(coin >= 10){
  if(player1.isTouching(chest)){
    chest.addImage(chestUnlocked)
    coin+=1
    chest.lifetime = 50
  }
  
}

//  here

if(player2.isTouching(coin1)){
  coin+=10
 coin1.destroy()
}

if(player2.isTouching(coin2)){
 coin+=10
coin2.destroy()
}

if(player2.isTouching(coin3)){
 coin+=10
coin3.destroy()
}

if(player2.isTouching(coin4)){
 coin+=10
coin4.destroy()
}

if(player2.isTouching(coin5)){
 coin+=10
coin5.destroy()
}

if(player2.isTouching(coin6)){
 coin+=10
coin6.destroy()
}

if(player2.isTouching(coin7)){
 coin+=10
coin7.destroy()
}

if(player2.isTouching(coin2)){
 coin+=10
coin2.destroy()
}

if(player2.isTouching(coin3)){
 coin+=10
coin3.destroy()
}

if(player2.isTouching(coin4)){
 coin+=10
coin4.destroy()
}

if(player2.isTouching(coin5)){
 coin+=10
coin5.destroy()
}

if(player2.isTouching(coin6)){
 coin+=10
coin6.destroy()
}

if(player2.isTouching(coin7)){
 coin+=10
coin7.destroy()
}
if(coin >= 10){
 if(player2.isTouching(chest)){
   chest.addImage(chestUnlocked)
 }
 
}


// end
  if (keyWentDown("UP_ARROW")) {
    player1.velocityY = -12;
  }

  player1.velocityY += 0.8


  if (keyDown("w")) {
    player2.velocityY = -12;
  }

  if (keyDown("a")) {
    player2.x = player2.x - 5
  }



  if (keyDown("d")) {
    player2.x = player2.x + 5
  }

  if (keyDown("RIGHT_ARROW")) {
    player1.x = player1.x + 5
  }



  if (keyDown("LEFT_ARROW")) {
    player1.x = player1.x - 5
  }

  player2.velocityY += 0.8

  player1.collide(edges)
  player2.collide(edges)

  player1.collide(w1)
  player2.collide(w1)

  player1.collide(w2)
  player2.collide(w2)

  player1.collide(w3)
  player2.collide(w3)

  player1.collide(w4)
  player2.collide(w4)

  player1.collide(w5)
  player2.collide(w5)
  
  player1.collide(w7)
  player2.collide(w7)

  player1.collide(w6)
  player2.collide(w6)

  player1.collide(w8)

  player1.collide(well)
  player2.collide(well)


  player2.collide(chest)

  drawSprites();
  
}
