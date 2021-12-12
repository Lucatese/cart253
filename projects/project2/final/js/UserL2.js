  class UserL2 {
    constructor(x, y,image) {
      this.x = x;
      this.y = y;
      this.size = 20;
      this.image = image;
      this.vx = 0;
      this.vy = 0;
      this.alive = true;
    }
  /**
  Checks whether the snake touches the user
  */
  checkHit(snakeL2) {
    if (this.x > snakeL2.x - snakeL2.width/2 &&
        this.x < snakeL2.x + snakeL2.width/2 &&
        this.y > snakeL2.y - snakeL2.height/2 &&
        this.y < snakeL2.y + snakeL2.height/2) {
      // If there's an overlap the UserL2 is Dead
      this.alive = false;
    }
  }

  /**
  Checks arrow keys and sets velocity appropriately
  */
  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  /**
  Adding movement to the UserL2
  */
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  /**
  Displays the UserL2
  */
  // Displaying the user image
   display() {
     push();
     imageMode(CENTER);
     image(this.image, this.x, this.y, this.size,);
     pop();
   }
}
