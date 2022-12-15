var fundo;
var tom, jerry;
var tomDeitado, tomAndando, tomFrente;
var jerryAndando, jerryMovendo, jerryDetetive;

function preload() {
    //load the images here
    fundo = loadImage("./images/garden.png")
    tomDeitado = loadAnimation("./images/cat1.png")
    tomAndando= loadAnimation("./images/cat2.png","./images/cat3.png")
    tomFrente= loadAnimation("./images/cat4.png")
    jerryAndando= loadAnimation("./images/mouse1.png")
    jerryMovendo= loadAnimation("./images/mouse2.png","./images/mouse3.png")
    jerryDetetive= loadAnimation("./images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("deitado",tomDeitado)
    tom.addAnimation("andando",tomAndando)
    tom.addAnimation("olhando",tomFrente)
    tom.scale = 0.2

    jerry = createSprite(200,600)
    jerry.addAnimation("andando2",jerryAndando)
    jerry.addAnimation("movendo",jerryMovendo)
    jerry.addAnimation("detetive",jerryDetetive)
    jerry.scale = 0.15
}

function draw() {

    background(fundo);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x < (tom.width-jerry.width)/2) {
        tom.velocityX = 0
        tom.changeAnimation("olhando")
        tom.x = 300

        jerry.changeAnimation("detetive")
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode == LEFT_ARROW) {
    jerry.changeAnimation("movendo")
    jerry.frameDelay = 25
    tom.changeAnimation("andando")
    tom.velocityX = -4
  }

}
