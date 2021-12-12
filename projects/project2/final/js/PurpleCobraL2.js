class PurpleCobraL2 extends SnakeL2 {
  constructor(x,y,image) {
    super(x,y,image);
    this.width = 70;
    this.height = 50;
    this.speed = 10;
  }

//displays the purple cobra image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop();
  }
}
