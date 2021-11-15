/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let oscillator;
let t = 0;


/**
Description of setup
*/
function setup() {
createCanvas(600,600);
userStartAudio();

oscillator = new p5.Oscillator(440,`sine`);
oscillator.amp(0.2);
}


/**
Description of draw()
*/
function draw() {
background(0);

let noiseValue = noise(t);
let newFreq = map(noiseValue,-1,1,0,2000);
oscillator.freq(newFreq);

t = t + 0.1;
}

function mousePressed() {
  oscillator.start();
}

function mouseReleased() {
  oscillator.stop();
}
