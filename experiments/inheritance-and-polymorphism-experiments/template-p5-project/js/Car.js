class Car extends Vehicle {
  // Create a new Car object that moves to the right
  constructor(x, y) {
    super(x,y);
    this.width = 50;
    this.height = 20;
    this.vx = 5;
  }

  // Display the car as a rectangle
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
