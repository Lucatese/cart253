/**
Template p5 Project
Luca Licatese

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let backgroundShade= 0;
let circleX= 0;
let circleY= 250;
let circleSize= 200;
let circleSpeed= 2;


/**
Description of setup
*/
function setup() {
createCanvas(500,500);

}

/**
Description of draw()
*/
function draw() {
background(backgroundShade);
circleX += circleSpeed;
ellipse(circleX,circleY,circleSize);

console.log(`circleX ${circleX} circleY ${circleY} circleSize ${circleSize} circleSpeed ${circleSpeed}`);

}
