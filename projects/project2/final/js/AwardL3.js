class AwardL3 {
  constructor(x, y, image) {
   this.x = random(0, width);
   this.y =  random(0, height);
   this.size =  random(50, 100);
   this.image = awardL3Image;
  }

  // Displaying the award image
  display() {
    push();
   image(this.image,this.x, this.y, this.size);
   pop();
    }
  }
