class Dodgeball extends DodgeableItem {
  constructor(x, y, image) {
    super(x, y, image);
    this.speed = -15;
    this.width = 125;
    this.height = 125;
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
