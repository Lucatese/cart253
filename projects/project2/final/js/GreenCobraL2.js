class GreenCobraL2 extends SnakeL2 {
  constructor(x,y,image) {
    super(x,y,image);
    this.width = 50;
    this.height = 40;
    this.speed = 4;
  }

//displays the green cobra image
  display() {
    super.display();

    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    pop();
  }
}
