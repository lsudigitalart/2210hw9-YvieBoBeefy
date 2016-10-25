var horse1;
var horse2;
var horse3;
var bg;
var cloud1;
var mySound;

function preload() {

  horse1 = loadImage("assets/horse1.png");
  horse2 = loadImage("assets/HORSE2.png");
  horse3 = loadImage("assets/HORSE3.png");
  bg = loadImage("assets/BG.png");
  cloud1 = loadImage("assets/clouds.png");
  cloud2 = loadImage("assets/clouds.png");
  mySound = loadSound("assets/sound.mp3");
}

function setup() {

  createCanvas(1220, 580);
  cloud1 = new Cloud(0, 0, .25, 1, cloud1);
  cloud2 = new Cloud(-1220, 0, .25, 1, cloud2);
  runner1 = new Runner(1220, 290, 200, random(-1, -1.5), 1, horse1);
  runner2 = new Runner(1220, 290, 200, random(-1, -1.5), 1, horse2);
  runner3 = new Runner(1220, 290, 200, random(-1, -1.5), 1, horse3);


  mySound.play();
}

function draw() {

  image(bg, 0, 0, 1220, 580);

  cloud1.display();
  cloud1.move();

  cloud2.display();
  cloud2.move();

  runner1.display();
  runner1.move();

  runner2.display();
  runner2.move();

  runner3.display();
  runner3.move();

}

function Runner(x, y, size, speed, bobspeed, img) {

  this.size = size;
  this.speed = speed;
  this.bobspeed = bobspeed;
  this.y = y;
  this.x = x;
  this.img = img;

  this.display = function() {

    image(this.img, this.x, this.y, this.size);

  };

  this.move = function() {

    this.x = this.x + this.speed;
    this.y = this.y + this.bobspeed;

    if (this.y > 300){
      this.bobspeed = this.bobspeed * -1;
    } else{
    if(this.y < 280){
      this.bobspeed = 1;
    }
  }
  };
}

function Cloud(x, y, bobspeed, speed, img) {

  this.x = x;
  this.y = y;
  this.speed = speed;
  this.bobspeed = bobspeed;
  this.img = img;

  this.display = function(){
    image(this.img, this.x, this.y);
  };

  this.move = function() {
    this.y = this.y + this.bobspeed;
    this.x = this.x + this.speed;

      if(this.x > 1120) {
        this.x = -1020;
        this.x = this.x + this.speed;
      }

      if(this.y > 5){
        this.bobspeed = this.bobspeed * -1;
      } else {
        if(this.y < -5){
          this.bobspeed = .25;
        }
      }
  };
}
