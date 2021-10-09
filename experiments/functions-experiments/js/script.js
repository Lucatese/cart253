/**
Template p5 project
Luca Licatese

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/


let bg = 0;



function setup() {
  createCanvas(500,500);

}



function draw() {
  background(bg);

  textAlign(CENTER,CENTER);
  textSize(64);
  fill(255);
  text(keyCode,width/2,height/2);
}

function keyPressed() {
}
