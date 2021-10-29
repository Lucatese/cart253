class Ball {

  // Defines all variables relating to balls
  constructor(x,y, ballSFX) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 200;
    this.ballSFX = ballSFX;
    this.active = true;
  }

  // Adding gravity to balls
  gravity(force) {
    this.ay = this.ay + force;
  }

  // Adding movement to balls
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

  // When a ball exits the frame,end2 state will appear
  check() {
     if (this.y > height)
       state = `end2`;
   }

   // When a ball exits frame, bouncing ball sound will play
   sound() {
       if (this.y > height) {
         this.ballSFX.play()
       }
     }


     // Ball will bounce if it lands on paddle
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

          // Bouncing ball sound will play if ball hits the paddle
          this.ballSFX.play();
      }
  }

  // Display ball
  display() {
    push();
    fill(255,100,0);
    stroke(0);
    ellipse( this.x, this.y, this.size);
    pop();
  }
