var canvas, backgroundImage;
var bg,bgs;
var questions;

var question, contestant, quiz;

function preload(){
bgs=loadImage("brain.jpg")
}
function setup(){
  canvas = createCanvas(850,400);
  bg=createSprite(425,200);
  bg.addImage(bgs);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("red");

}
