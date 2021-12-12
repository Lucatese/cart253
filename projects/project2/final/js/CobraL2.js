class CobraL2 extends SnakeL2 {
  constructor(x,y,image) {
    super(x,y,image);
    this.width = 40;
    this.height = 30;
    this.speed = 8;
  }

//displays the cobra image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop();
  }
}
