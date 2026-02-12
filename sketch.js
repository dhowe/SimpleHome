let len = 150;

function setup() {
  createCanvas(700, 1300);
  background(220);
  noFill();
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 24; j++) {
      push();
      translate(50+i*50,50+j*50);
      square(0,0,50);
      pop();
    }
  }
}

