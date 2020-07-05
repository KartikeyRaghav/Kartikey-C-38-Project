var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var car1_img, car2_img, car3_img, car4_img;
var road_sticks = [];
var road_side = [];
var scoree,startScreen,gameArea;

function preload(){
  car1_Img = loadImage("images/Car.png");
  car2_Img = loadImage("images/Car2.png");
  car3_Img = loadImage("images/Car3.png");
  car4_Img = loadImage("images/Car4.png");
}


function setup(){
  canvas = createCanvas(1300,600);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  road1 = createSprite(162.5,height/2,325,height);
  road1.shapeColor = '#333333';
  road2 = createSprite(487.5,height/2,325,height);
  road2.shapeColor = '#333333';
  road3 = createSprite(812.5,height/2,325,height);
  road3.shapeColor = '#333333';
  road4 = createSprite(1137.5,height/2,325,height);
  road4.shapeColor = '#333333';

  var a = -50;
  for(var i = 0; i < 5; i++) {
    stick = createSprite(162.5,a,20,100);
    stick.shapeColor = "white";
    road_sticks.push(stick);
    a += 150;
  }

  var b = -50;
  for(var i = 0; i < 5; i++) {
    stick = createSprite(487.5,b,20,100);
    stick.shapeColor = "white";
    road_sticks.push(stick);
    b += 150;
  }

  var c = -50;
  for(var i = 0; i < 5; i++) {
    stick = createSprite(812.5,c,20,100);
    stick.shapeColor = "white";
    road_sticks.push(stick);
    c += 150;
  }

  var d = -50;
  for(var i = 0; i < 5; i++) {
    stick = createSprite(1137.5,d,20,100);
    stick.shapeColor = "white";
    road_sticks.push(stick);
    d += 150;
  }

  car1 = createSprite(162.5,height-100,30,70);
  car1.addImage(car1_Img);
  car1.scale = 0.4;

  car2 = createSprite(487.5,height-100,30,70);
  car2.addImage(car2_Img);
  car2.scale = 0.4;

  car3 = createSprite(812.5,height-100,30,70);
  car3.addImage(car3_Img);
  car3.scale = 0.5;

  car4 = createSprite(1137.5,height-100,30,70);
  car4.addImage(car4_Img);
  car4.scale = 0.4;
}


function draw(){

  if(playerCount === 1){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    scoree = document.querySelector('.score');
    startScreen = document.querySelector('.startScreen');
    startScreen.addEventListener('click', start);
    gameArea = document.querySelector('.gameArea');

    for(var j = 0; j < road_sticks.length; j++) {
      road_sticks[j].setVelocity(0,5);

      if(road_sticks[j].y > 700) {
        road_sticks[j].y = -50;
      }
    }

    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}


function gamePlay() {
  if(gameState === 1) {

    if(car1.y > 200) {if(keyIsDown(UP_ARROW)) {car1.y -= 5;}}
    if(car1.y < 545) {if(keyIsDown(DOWN_ARROW)) {car1.y += 5;}}
    if(car1.x < 297.5) {if(keyIsDown(RIGHT_ARROW)) {car1.x += 5;}}
    if(car1.x > 27.5) {if(keyIsDown(LEFT_ARROW)) {car1.x -= 5;}}

    if(car2.y > 200) {if(keyIsDown(87)) {car2.y -= 5;}}
    if(car2.y < 545) {if(keyIsDown(90)) {car2.y += 5;}}
    if(car2.x < 622.5) {if(keyIsDown(83)) {car2.x += 5;}}
    if(car2.x > 352.5) {if(keyIsDown(65)) {car2.x -= 5;}}

    if(car3.y > 200) {if(keyIsDown(82)) {car3.y -= 5;}}
    if(car3.y < 545) {if(keyIsDown(67)) {car3.y += 5;}}
    if(car3.x < 947.5) {if(keyIsDown(70)) {car3.x += 5;}}
    if(car3.x > 677.5) {if(keyIsDown(68)) {car3.x -= 5;}}

    if(car4.y > 200) {if(keyIsDown(89)) {car4.y -= 5;}}
    if(car4.y < 545) {if(keyIsDown(66)) {car4.y += 5;}}
    if(car4.x < 1272.5) {if(keyIsDown(72)) {car4.x += 5;}}
    if(car4.x > 1002.5) {if(keyIsDown(71)) {car4.x -= 5;}}

    window.requestAnimationFrame(gamePlay);
    drawSprites();
  }
}

function start() {
  gameArea.classList.remove('hide');
  startScreen.classList.add('hide');

  window.requestAnimationFrame(gamePlay);

  form.reset.position(20,605);
}
