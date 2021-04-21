let state = 0;
let numbers;

//fonts
let simsbold;
let simsboldSC;

function setup() {
  createCanvas(300,600);
  textAlign(CENTER);

  simsbold = loadFont("assets/thesimssansbold.otf");
  simsboldSC = loadFont("assets/thesimssansboldsc.otf");
}

function draw() {
  background('blue');
  textFont(simsbold);
  fill(166,227,41);
  // clear();
  switch (state) {
    case 0:
      text("Tap the screen to start randomization", width/2,height/2);
      break;

    case 1:
      text("what the hell");
      break;

  }
}

// function touchStarted() {
//   getAudioContext().resume();
// }
