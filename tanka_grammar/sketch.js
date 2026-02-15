/* 
 * A grammar implementing the thirty-one-syllable tanka form 
 * (https://poets.org/glossary/tanka)
 */

let font, grammar, json;
let lines = ["", "click to", "generate", "a tanka", ""];

function setup() {

  createCanvas(650, 300);
  textAlign(CENTER);
  loadFont('Resagokr.otf', f => textFont(f, 30));
  
  grammar = RiTa.grammar(tanka); // from grammar.js
}

function draw() {

  background(230, 240, 255);
  lines.forEach((line,i) => text(line, width / 2, 75 +i*35));
}

function mouseReleased() {

  let result = grammar.expand();
  
  // split on the <br> tags
  lines = result.split("<br>");  
}