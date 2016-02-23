// Set Up Board Here

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
  
  createHorizontalShip(40,40,300);
  createHorizontalShip(325,200,150);  
  createHorizontalShip(493,458,250);
  createVerticalShip(60,120,200);
  createVerticalShip(650,75,300);
  createVerticalShip(253,408,120);


  placePins();


}

function createHorizontalShip(shipX, shipY, shipWidth){
  var c = color(255, 204, 0);  // Define color 'c'
  var shipHeight = 50;
  fill(c);
  stroke(2);
  strokeWeight(3);
  rect(shipX,shipY,shipWidth,shipHeight);
  noFill();
  for (var i = shipWidth/5; i < shipWidth; i = i + shipWidth/5) {
    ellipse(shipX+i, shipY+(shipHeight/2), 20, 20)
  };
}
function createVerticalShip(shipX, shipY, shipHeight){
  var c = color(255, 204, 0);  // Define color 'c'
  var shipWidth = 50;
  fill(c);
  stroke(2);
  strokeWeight(3);
  rect(shipX,shipY,shipWidth,shipHeight);
  noFill();
  for (var i = shipHeight/5; i < shipHeight; i = i + shipHeight/5) {
    ellipse(shipX+(shipWidth/2), shipY+i, 20, 20)
  };
}