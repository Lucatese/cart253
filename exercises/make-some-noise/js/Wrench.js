class Wrench extends DodgeableItem {
  constructor(x, y,) {
    super(x, y,);
    this.speed = 10;
    this.size = 40
  }


  display() {
    super.display();

    push();
 ellipseMode(CENTER);
 stroke(100,100,255);
 fill(255,0,0)
 ellipse(this.x,this.y,this.size);
 pop();
  }
}
