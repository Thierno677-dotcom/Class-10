//store my paragraph that i will add
let para

function setup() {
  createCanvas(windowWidth, windowHeight);
  describe("A 400 by 400 pixel gray canvas.");
  
  para = createP('this is the text on the webpage and was made with p5');
  // Move the position call inside setup():
  para.position(0, 20);

  //adjusting the css with javascript 
  //any styles applied with js will override any styles in css
  para.style('background-color: blue')
}

function draw() {

  background(220);
  text("this is text is on the canvas", 10, 20);
}