class DodgeableItem {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = undefined;
    this.height = undefined;
    this.speed = undefined;
    this.image = image;
    this.dodges = 0;
  }

  // Adding movement to the dodgeableItems
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }



  /* When dodgeableItems reach the other side of screen they will reappear at the starting
  point in a random position */
  wrap() {
    if (this.x > width) {
      this.x -= width;
      this.y = random(0, height);
    } else if (this.x < 0) {
      this.x += width;
      this.y = random(0, height);
    }
  }

  // When dodgeableItems pass by user, 1 is added to the dodges
  checkScreen() {
    if (this.x < width / 8) {
      this.dodges += 1;
    }
  }

  // If the number of dodgeableItems dodged exceeds 50, the `success` state is triggered
  numDodges() {
    if (this.dodges > 50) {
      state = `success`;
    }
  }

  // Display dodgeableItems (done in corresponding classes)
  display() {
  }
}
