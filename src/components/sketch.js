export default function sketch (p) {
  let hueRand1;
  let hueRand2;
  let hueRand3;

  p.setup = function () {
    p.createCanvas(windowWidth, windowHeight);
    p.colorMode(HSB);
  };

  p.draw = function () {
    p.noStroke();

    if (mouseIsPressed){
      p.createBalloon();
      p.createConfetti();
      p.createTri();
    };
    if (hueRand1 > 360){
      hueRand1 = 0;
    };
    if (hueRand2 > 360){
      hueRand2 = 0;
    };
    if (hueRand3 > 360){
      hueRand3 = 0;
    };
  
    if (keyIsPressed){
      p.background(255);
    };

    
   p.createBalloon = function () {
    var hueRand1= random(255);

    var xPos = random(-200,200);
    var yPos = random(-200,200);
    var numOfLoop = 100;
    var circleSize = random(100);
    var randomB = random(50);
  
    for (var i = 0; i < numOfLoop; i++){
      p.fill(hueRand1, randomB, 100);
      p.ellipse(mouseX+xPos, mouseY+yPos, circleSize, circleSize);
    };
  }; 

  p.createConfetti = function () {
    var hueRand2= random(255);

    var xRectPos = random(-200,200);
    var yRectPos = random(-200,200);
    var numOfLoop = 100;
    var rectSizeX = random(80);
    var rectSizeY = random(80);
    var randomB = random(50);
  
    for (var i = 0; i < numOfLoop; i++){
      p.fill(hueRand2, randomB, 100);
      p.rect(mouseX+xRectPos, mouseY+yRectPos, rectSizeX, rectSizeY);;
    };
  }; 

  p.createTri = function () {
    var hueRand3= random(255);

    var triRandom = random(100)
    var xTriPos1 = random(triRandom *-1, triRandom *+1)+ triRandom
    var yTriPos1 = random(triRandom *-1, triRandom *+1)+ triRandom
    var xTriPos2 = random(triRandom *-1, triRandom *+1)+ triRandom
    var yTriPos2 = random(triRandom *-1, triRandom *+1)+ triRandom
    var xTriPos3 = random(triRandom *-1, triRandom *+1)+ triRandom
    var yTriPos3 = random(triRandom *-1, triRandom *+1)+ triRandom
  
    var numOfLoop = 100;
    var randomB = random(50);
  
    for (var i = 0; i < numOfLoop; i++){
      p.fill(hueRand3, randomB, 100);
      p.triangle(mouseX+xTriPos1, mouseY+yTriPos1, mouseX+xTriPos2, mouseY+yTriPos2, mouseX+xTriPos3, mouseY+yTriPos3 );
    };
  }; 
  };

};

