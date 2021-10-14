/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
let music;

function preload() {
music = loadSound(`assets/sounds/bark.wav`);
}



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
background(0);
}

function mousePressed() {
  tryMusic();
}

function keyPressed() {
  tryMusic();
}

function tryMusic() {
  if (!music.isPlaying()) {
  music.loop();
  }
}
