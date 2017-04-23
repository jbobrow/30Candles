// For Nancy Se's 30th
// A surprising amount of ways to arrange 30 candles on your birthday cake, 
// no matter the size. However, shape is a different story.
//
// by Jonathan Bobrow, 2015

var PHI = (1.0+Math.sqrt(5.0))/2.0;      // the only way to place candles is to use the golden ratio
var spread;
var frostingColor;             // I guess if you want to pick your frosting color, you can...
var candleColor;               // do candles come in different colors? not here they don't
var minCakeSize = 50;          // units are mm, think cupcake at smallest
var numCandles = 30;           // ¡¡¡important!!!

var sugar, flour, salt;

function setup() {
  var myCanvas = createCanvas(400,400);
  myCanvas.parent('cake_box');
  smooth();
  noStroke();

  cakeDecorators();
}

function draw() {
  background(30);

  // make a cake
  frosting = color(sugar.value(), flour.value(), salt.value());
  fill(frosting);
  ellipse(width/2, height/2, minCakeSize + mouseY/2, minCakeSize + mouseY/2);

  // place the candles  
  candleColor = color(255);
  fill(candleColor);
  for(var i=1; i<=numCandles + 1; i++){  // you wouldn't think I'd forget 1 for goodluck, right?
   push();
     translate(width/2,height/2);
     rotate(i*2*PI/PHI*mouseX);
     spread = map(mouseY, 0, height, 4, 16);
     translate(Math.sqrt(i)*spread,0);
     ellipse(0,0,10,10);
   pop();
  }

  fill(255)
  textAlign(RIGHT);
  text("sugar", 390, 325);
  text("flour", 390, 355);
  text("salt", 390, 385); 
}

// really I am just coloring the cake... but these ingredients sound more fun :)
function cakeDecorators() {
  // create sliders
  sugar = createSlider(0, 255, 244);
  sugar.position(220, 310);
  flour = createSlider(0, 255, 79);
  flour.position(220, 340);
  salt = createSlider(0, 255, 158);
  salt.position(220, 370);
}