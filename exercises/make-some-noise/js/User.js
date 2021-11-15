class User {
  constructor(x,y,) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0.1;
    this.speed = 10;
    this.dodged = true;

  }

  checkCollision(dodgeableItem) {
    if (this.x > dodgeableItem.x - dodgeableItem.size/2 &&
    this.x < dodgeableItem.x + dodgeableItem.size/2 &&
    this.y > dodgeableItem.y - dodgeableItem.size/2 &&
    this.y < dodgeableItem.y + dodgeableItem.size/2) {
      this.dodged = false;
    }
  }

 handleInput() {
let micLevel = mic.getLevel();
this.y = map(micLevel,0,3,0,height);
}

  display() {
      push();
      fill(255);
      noStroke();
      ellipse(this.x,this.y,this.size);
      pop();
    }
  }
