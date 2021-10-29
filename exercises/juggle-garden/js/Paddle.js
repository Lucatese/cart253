class Paddle {

  // Defines all the variables corresponding to the paddle
  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
  }

  // Paddle is controlled by mouse movement
  move() {
    this.x = mouseX;
  }

  // Display paddle
  display() {
  push();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(this.x,this.y,this.width,this.height);
  pop();
  }

}
