class DodgeableItem {
  constructor(x, y,) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = undefined;
    this.height = undefined;
    this.speed = undefined;

  }


  move() {
    this.x += this.vx;
    this.y += this.vy;
  }





  wrap() {
    if (this.x > width) {
      this.x -= width;

    } else if (this.x < 0) {
      this.x += width;

    }
  }





  display() {
  }
}
