class Chainsaw {

  // Defines all variables relating to chainsaws
  constructor(x,y,image,chainsawSFX) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 150;
    this.chainsawSFX = chainsawSFX;
    this.active = true;
    this.image = image;
  }

  // Adding gravity to chainsaws
  gravity(force) {
    this.ay = this.ay + force;
  }

  // Adding movement to chainsaws
  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = constrain(this.x, 0, width);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size/2 > height) {
      this.active = false;
    }
  }

  // When a chainsaw exits the frame,end1 state will appear
  check() {
     if (this.y > height)
       state = `end1`;
   }

   // When a chainsaw exits frame, chainsaw sound will play
   sound() {
       if (this.y > height) {
         this.chainsawSFX.play()
       }
     }


     // Chainsaw will bounce if it lands on paddle
     bounce(paddle) {
        if (this.x > paddle.x - paddle.width / 2 &&
          this.x < paddle.x + paddle.width / 2 &&
          this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
          this.y - this.size / 2 < paddle.y + paddle.height / 2) {

          // Bounce
          let dx = this.x - paddle.x;
          this.vx = this.vx + map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);

          this.vy = -this.vy;
          this.ay = 0;

          // Chainsaw sound will play if chainsaw hits the paddle
          this.chainsawSFX.play();
      }
  }

  // Display chainsaw image
  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
