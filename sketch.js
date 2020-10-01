var bullet , wall;
var speed,weight;
var thickness;
var damage;

var bullet2 , wall2;
var speed2,weight2;
var thickness1;
var damage2;

var bullet3 , wall3;
var speed3,weight3;
var thickness2;
var damage3;

var bullet4 , wall4;
var speed4,weight4;
var thickness3;
var damage4;
var boundary;

function setup(){
  createCanvas(1600,1600);
     thickness = Math.round(random(22,83));
     thickness1 = Math.round(random(22,83));
     thickness2 = Math.round(random(22,83));
     thickness3 = Math.round(random(22,83));


    
 
                                  
  
// this code is for the sprite 1
            bullet = createSprite(50,200,50,50);
            wall = createSprite(1500,200,thickness,200);
            speed = Math.round(random(223,321));
            weight = Math.round(random(30,1500));
            bullet.velocityX = speed;

//this code is for sprite 2
            bullet2 = createSprite(50,600,50,50);
            wall2 = createSprite(1500,600,thickness1,200);
            speed2 = Math.round(random(223,321));
            weight2 = Math.round(random(30,52));
            bullet2.velocityX = speed2;

//this code is for sprite3
            bullet3 = createSprite(50,1000,50,50);
            wall3 = createSprite(1500,1000,thickness2,200);
            speed3 = Math.round(random(223,321));
            weight3= Math.round(random(30,1500));
            bullet3.velocityX = speed3;

//this code is for sprite4
            bullet4 = createSprite(50,1400,50,50);
            wall4 = createSprite(1500,1400,thickness3,200);
            speed4 = Math.round(random(223,321));
            weight4 = Math.round(random(30,1500));
            bullet4.velocityX = speed4;
    
}
function draw(){
    background("black");


if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage = 0.5 * weight * speed *speed/(thickness *thickness*thickness);

    if(damage>10){
        wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
        wall.shapeColor = color(0,255,0);
    }
}
if(hasCollided(bullet2,wall2)){
    bullet2.velocityX=0;
    damage2 = 0.5 * weight2 * speed2 *speed2/(thickness1 *thickness1*thickness1);

    if(damage2>10){
        wall2.shapeColor = color(255,0,0);
    }
    if(damage2<10){
        wall2.shapeColor = color(0,255,0);
    }
}
if(hasCollided(bullet3,wall3)){
    bullet3.velocityX=0;
    damage3= 0.5 * weight3 * speed3 *speed3/(thickness2 *thickness2*thickness2);

    if(damage3>10){
        wall3.shapeColor = color(255,0,0);
    }
    if(damage3<10){
        wall3.shapeColor = color(0,255,0);
    }
}
if(hasCollided(bullet4,wall4)){
    bullet4.velocityX=0;
 
    damage4 = 0.5 * weight4 * speed4 *speed4/(thickness3 *thickness3*thickness3);

    if(damage4>10){
        wall4.shapeColor = color(255,0,0);
    }
    if(damage4<10){
        wall4.shapeColor = color(0,255,0);
    }
}
    for(var i = 0 ; i < 1600 ; i = i+400){
    bounadry = createSprite(800,i,1600,10);
          
    }
    
    

    drawSprites();
    

}
function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true;
    }else{
        return false;
    }
}