class User {
  constructor(x,y,userImage) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 150;
    this.dodged = true;
    this.image = userImage;
  }

  // If the user gets hit by a dodgeableItem, dodged becomes false
    checkHit(dodgeableItem) {
      if (this.x > dodgeableItem.x - dodgeableItem.height / 2 &&
        this.x > dodgeableItem.x - dodgeableItem.width / 2 &&
        this.x < dodgeableItem.x + dodgeableItem.height / 2 &&
        this.x < dodgeableItem.x + dodgeableItem.width / 2 &&
        this.y > dodgeableItem.y - dodgeableItem.height / 2 &&
        this.y > dodgeableItem.y - dodgeableItem.width / 2 &&
        this.y < dodgeableItem.y + dodgeableItem.height / 2 &&
        this.y < dodgeableItem.y + dodgeableItem.width / 2) {
        this.dodged = false;
      }
    }

    // Can control the user using mouse movement only for the Y-Axis
    handleInput() {
      this.y = mouseY;
    }

  // Displaying the user image
   display() {
     push();
     imageMode(CENTER);
     image(this.image, this.x, this.y, this.width, this.height);
     pop();
   }
}
