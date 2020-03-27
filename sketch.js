var sun, sunImg;
var mercury, mercuryImg;
var venus, venusImg;
var earth, earthImg;
var mars, marsImg;
var jupiter, jupiterImg;
var saturn, saturnImg;
var uranus, uranusImg;
var neptune, neptuneImg;
var radius = 60;
var angle = 0;
var speed = 0.5;
var centerX = 300;
var centerY = 300;

function preLoad() {

sunImg = loadImage("images/sun.jpg");
mercuryImg = loadImage("images/mercury.jpg");
venusImg = loadImage("images/Venus.jpg");
earthImg = loadImage("images/Earth.jpg");
marsImg = loadImage("images/Mars.jpg");
jupiterImg = loadImage("images/Jupiter.jpg");
saturnImg = loadImage("images/Saturn.jpg");
uranusImg = loadImage("images/Uranus.jpg");
neptuneImg = loadImage("images/neptune.jpg");

}

function setup() {
 createCanvas(600, 600);

 sun = createSprite(300, 300, 80, 80);
 sun.addImage("sun", sunImg);
 sun.scale = 0.15;
 sun.setCollider("circle", 0, 0, 260);

 mercury = createSprite(360, 300, 20, 20);
 mercury.addImage("mercury", mercuryImg);
 mercury.scale = 0.2;
 mercury.setCollider("circle", 0, 0, 60);

 venus = createSprite(390, 300, 20, 20);
 venus.addImage("venus", venusImg);
 venus.scale = 0.15;
 venus.setCollider("circle", 0, 0, 60);

 earth = createSprite(420, 300, 20, 20);
 earth.addImage("earth", earthImg);
 earth.scale = 0.2;
 earth.setCollider("circle", 0, 0, 60);

 mars = createSprite(450, 300, 20, 20);
 mars.addImage("mars", marsImg);
 mars.scale = 0.15;
 mars.setCollider("circle", 0, 0, 60);

 jupiter = createSprite(480, 300, 20, 20);
 jupiter.addImage("jupiter", jupiterImg);
 jupiter.scale = 0.15;
 jupiter.setCollider("circle", 0, 0, 60);

 saturn = createSprite(510, 300, 20, 20);
 saturn.addImage("saturn", saturnImg);
 saturn.scale = 0.2;
 saturn.setCollider("circle", 0, 0, 60);

 uranus = createSprite(540, 300, 20, 20);
 uranus.addImage("uranus", uranusImg);
 uranus.scale = 0.2;
 uranus.setCollider("circle", 0, 0, 60);

 neptune = createSprite(570, 300, 20, 20);
 neptune.addImage("neptune", neptuneImg);
 neptune.scale = 0.2;
 neptune.setCollider("circle", 0, 0, 60);
}

function draw() {
  background("black");  

  angle = angle + speed;

  mercury.x = centerX - 60*cos(angle);
  mercury.y = centerY + 60*sin(angle);

  venus.x = centerX - 90*cos(angle);
  venus.y = centerY + 90*sin(angle);

  earth.x = centerX - 120*cos(angle);
  earth.y = centerY + 120*sin(angle);

  mars.x = centerX - 150*cos(angle);
  mars.y = centerY + 150*sin(angle);

  jupiter.x = centerX - 180*cos(angle);
  jupiter.y = centerY + 180*sin(angle);

  saturn.x = centerX - 210*cos(angle);
  saturn.y = centerY + 210*sin(angle);

  uranus.x = centerX - 240*cos(angle);
  uranus.y = centerY + 240*sin(angle);

  neptune.x = centerX - 2700*cos(angle);
  neptune.y = centerY + 270*sin(angle);

  if(frameCount%9===0){
    sun.scale = sun.scale + 0.01;
  }

  if(sun.isTouching(mercury)){
    mercury.destroy();
  }

  if(sun.isTouching(venus)){
    venus.destroy();
  }
  if(sun.isTouching(earth)){
    earth.destroy();
  }
  if(sun.isTouching(mars)){
    mars.destroy();
  }
  if(sun.isTouching(jupiter)){
    jupiter.destroy();
  }

  if(sun.isTouching(saturn)){
    saturn.destroy();
  }

  if(sun.isTouching(uranus)){
    uranus.destroy();
  }

  if(sun.isTouching(neptune)){
    neptune.destroy();
  }

  drawSprites();
  
}