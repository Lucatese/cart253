class SnakeL2 {
  constructor(x,y,image) {
    this.x = x;
    this.y = y;
    // Dimensions (defined by subclasses)
    this.width = undefined;
    this.height = undefined;
    // Current velocity
    this.vx = 0;
    this.vy = 0;
    // Max speed (defined by subclasses)
    this.speed = undefined;
    // Image (defined by subclasses)
    this.image = image;
  }

  // Adding movement to the snakes
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  /*   when snakes pass canvas they'll wrap around on other side of canvas*/
  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
    else if (this.x < 0) {
      this.x += width;
    }
  }

  /**
  To be implemented by subclasses. This one does nothing for now.
  */
  display() {

  }
}
