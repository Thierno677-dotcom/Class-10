//store my paragraph that i will add
let para
let slider
let sliderValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  describe("A 400 by 400 pixel gray canvas.");
  
  para = createP('this is the text on the webpage and was made with p5');
  // Move the position call inside setup():
  para.position(0, 20);

  //adjusting the css with javascript 
  //any styles applied with js will override any styles in css
  para.style('background-color: blue')
  para.style('margin: 0')

  slider = createSlider(12, 24, 16)
  slider.position(0, 40)
  slider.changed(sliderChanged)
}

function draw() {

  background(220);
  text("this is text is on the canvas", 10, 20);

  push()
  textSize(sliderValue)
  text(sliderValue, width/2, height/2)
  pop()
  
  
  
}

function sliderChanged(){
  sliderValue = slider.value()
}
