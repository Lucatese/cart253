class Brick extends DodgeableItem {
  constructor(x, y,) {
    super(x, y,);
    this.speed = 10;
    this.size = 50;
  }


  display() {
    super.display();

    push();
 ellipseMode(CENTER);
 stroke(100,100,255);
 fill(0,0,255)
 ellipse(this.x,this.y,this.size);
 pop();
  }
}
