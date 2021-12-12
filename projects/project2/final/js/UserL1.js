class UserL1 {
  constructor(userImage) {
    this.x = width/5;
    this.y = height/2;
    this.width = 200;
    this.height = 200;
    this.dodged = true;
    this.image = userImage;
  }

  // If the user gets hit by a dodgeableItem, dodged becomes false
    checkCollision(dodgeableItem) {
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

    // If user is hit by an item, 'level1Fail' state is triggered
    notDodged() {
      if (!this.dodged) {
        state = `level1Fail`;
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
