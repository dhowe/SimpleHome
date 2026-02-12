let walkers = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  for (let i = 0; i < 10; i++) {
    walkers[i] = {
      x: width / 2,
      y: height / 2,
      tx: random(50, 450),
      ty: random(50, 450),
    };
  }
}

function draw() {
  background(0, 32);

  for (let i = 0; i < walkers.length; i++) {
    let w = walkers[i];

    circle(w.x, w.y, 10);

    // move 5% of the way to the target
    w.x = lerp(w.x, w.tx, 0.05);
    w.y = lerp(w.y, w.ty, 0.05);

    let d = dist(w.x, w.y, w.tx, w.ty);

    // if we're close enough, pick a new target
    if (d < 10) {
      w.tx = random(width);
      w.ty = random(height);
    }
  }
}
