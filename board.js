// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill


function setup() {
  createCanvas(800, 600);
  stroke(0); 
  fill(150);
}

function draw() {
  //set the background color
  background(240);

  //set up text
  textSize(10);
  textAlign(CENTER);
  fill(0);

  //vertical lines
  var interval = 50;
  for (var i = 0; i <= width; i = i + interval) {
    line(i,0,i,height);
    text(i.toString(), i, 20);
  };
  //horizontal lines
  for (var i = 0; i <= height; i = i + interval) {
    line(0,i,width,i);
    text(i.toString(), 10, i);
  };


  

  placePins();

  var c = color(255, 204, 0);  // Define color 'c'

}