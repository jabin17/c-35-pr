var dog, happydog
var foodS, foodStock
var database
var position 

function preload(){
dog=loadImage("sprites/dog.png")
dogHappy=loadImage("sprites/happydog.png")
}

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    dog = createSprite(250,250,10,10);
    

foodStock=database.ref('food');
foodStock.on("value",readStock)

}

function draw(){
    background("white");
  
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
}

    drawSprites();
}

function readStock(data){
    foodS=data.val();
}


function writeStock(x){

    database.ref('/').update({
        food:x
    })
}