class Dodgeball extends DodgeableItem {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -3;
    this.width = 75;
    this.height = 75;
  }

  // Displaying the Dodgeball image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
