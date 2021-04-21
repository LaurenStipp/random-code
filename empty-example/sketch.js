let state = 0;
let numbers;

//fonts
let simsbold;
let simsboldSC;

function setup() {
  createCanvas(1792,828);

  simsbold = loadFont("assets/thesimssansbold.otf");
  simsboldSC = loadFont("assets/thesimssansboldsc.otf");
}

function draw() {
  background(66,118,183);
  textFont(simsbold);
  fill(166,227,41);
  clear();
  switch (state) {
    case 0:
      text("Tap the screen to start randomization", width/2,height/2);
      break;

    case 1:
      text("")
      break;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
