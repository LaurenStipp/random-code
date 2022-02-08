let state = 0;

//fonts
let simsbold;
let simsboldSC;

//images
let icon;

function preload() {
  //images
  icon = loadImage("assets/icon.png");
}

function setup() {
  createCanvas(400, 700);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  simsbold = loadFont("assets/thesimssansbold.otf");
  simsboldSC = loadFont("assets/thesimssansboldsc.otf");

}

function draw() {
  background(66, 118, 183);
  textFont(simsboldSC);
  fill(166, 227, 41);
  noStroke();
  // clear();
  switch (state) {
    case -1:
      break;

    case 0: // opening screen
      background('white');
      push();
      textSize(60);
      fill(66, 118, 183);
      text("The Sims 4", width / 2, height / 2 - 250);
      pop();

      textSize(50);
      fill(60, 170, 214);
      text("Random Legacy", width / 2, height / 2 - 180);
      text("Decider", width / 2, height / 2 - 140);

      image(icon, width / 2, height / 2 + 60, 145, 300);

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();

      textSize(30);
      // fill(33,185,107);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      case 1:
      background('white');
      ranFate();
      break;

  }
}

function ranFate() {
  // noLoop();
  let num1 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  // noLoop();
  let mStatus = random(num1);
  console.log("Marital Number Fate ", mStatus);
  if (mStatus == 1 || mStatus < 6) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test1", width / 2, height / 2);
    pop();
  } else if (mStatus > 5 && mStatus < 16) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test2", width / 2, height / 2);
    pop();

  } else if (mStatus == 16) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test3", width / 2, height / 2);
    pop();

  } else if (mStatus == 17) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test4", width / 2, height / 2);
    pop();

  } else if (mStatus == 18) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test5", width / 2, height / 2);
    pop();

  } else if (mStatus == 19) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test6", width / 2, height / 2);
    pop();

  } else if (mStatus == 20) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test7", width / 2, height / 2);
    pop();

  } else if (mStatus == 21) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test8", width / 2, height / 2);
    pop();

  } else if (mStatus == 22) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test9", width / 2, height / 2);
    pop();

  } else if (mStatus == 23) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test10", width / 2, height / 2);
    pop();

  } else if (mStatus == 24) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test11", width / 2, height / 2);
    pop();

  } else if (mStatus == 25) {
    background('white');
    fill('white');
    push();
    textSize(50);
    text("test12", width / 2, height / 2);
    pop();

  } else {
    state = 0;
  }
}

// function numKid() {
//   let num2 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   let nStatus = random(num2);
//   console.log("Kids Number Fate ", nStatus);
//   if (nStatus == 1 || nStatus == 2) {
//     state = 29;
//   } else if (nStatus >= 3 && nStatus <= 6) {
//     state = 30;
//   } else if (nStatus == 7 || nStatus == 8) {
//     state = 31;
//   } else if (nStatus == 9) {
//     state = 32;
//   } else if (nStatus == 10) {
//     state = 33;
//   } else {
//     state = 0;
//   }
// }
//
// function pCareer() {
//   let num3 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   let pStatus = random(num3);
//   console.log("Primary Career Number Fate ", pStatus);
//   if (pStatus >= 1 || pStatus < 7) {
//     state = 41;
//   } else if (pStatus >= 7 || pStatus < 10) {
//     state = 42;
//   } else if (pStatus == 10) {
//     state = 43;
//   } else {
//     state = 0;
//   }
// }
//
// function conCar() {
//   let num4 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26,27,28,29,30,31,32,33,34,35,36,37,38])
//   let conStatus = random(num4);
//   console.log("Conventional Career Number Fate ",conStatus);
//
//   }else {
//     state = 0;
//   }
// }

// function conCar() {
//   let num4 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48])
//   let conStatus = random(num4);
//   console.log("Conventional Career Number Fate ",conStatus);
//   if (conStatus == 1) {
//     state = 48;
//   } else if (conStatus == 2) {
//     state = 49;
//   } else if (conStatus == 3) {
//     state = 50;
//   } else if (conStatus == 4) {
//     state = 51;
//   } else if (conStatus == 5) {
//       state = 52;
//   } else if (conStatus == 6) {
//       state = 53;
//   } else if (conStatus == 7) {
//       state = 54;
//   } else if (conStatus == 8) {
//       state = 55;
//   } else if (conStatus == 9) {
//       state = 56;
//   } else if (conStatus == 10) {
//       state = 57;
//   } else if (conStatus == 11) {
//       state = 58;
//   } else if (conStatus == 12) {
//       state = 59;
//   } else if (conStatus == 13) {
//       state = 60;
//   } else if (conStatus == 14) {
//       state = 61;
//   } else if (conStatus == 15) {
//       state = 62;
//   } else if (conStatus == 16) {
//       state = 63;
//   } else if (conStatus == 17) {
//       state = 64;
//   } else if (conStatus == 18) {
//       state = 65;
//   } else if (conStatus == 19) {
//       state = 66;
//   } else if (conStatus == 20) {
//       state = 67;
//   } else if (conStatus == 21) {
//       state = 68;
//   } else if (conStatus == 22) {
//       state = 69;
//   } else if (conStatus == 23) {
//       state = 70;
//   } else if (conStatus == 24) {
//       state = 71;
//   } else if (conStatus == 25) {
//       state = 72;
//   } else if (conStatus == 26) {
//       state = 73;
//   } else if (conStatus == 27) {
//       state = 74;
//   } else if (conStatus == 28) {
//       state = 75;
//   } else if (conStatus == 29) {
//       state = 76;
//   } else if (conStatus == 30) {
//       state = 77;
//   } else if (conStatus == 31) {
//       state = 78;
//   } else if (conStatus == 32) {
//       state = 79;
//   } else if (conStatus == 33) {
//       state = 80;
//   } else if (conStatus == 34) {
//       state = 81;
//   } else if (conStatus == 35) {
//       state = 82;
//   } else if (conStatus == 36) {
//       state = 83;
//   } else if (conStatus == 37) {
//       state = 84;
//   } else if (conStatus == 38) {
//       state = 85;
//   } else if (conStatus == 39) {
//       state = 86;
//   } else if (conStatus == 40) {
//       state = 87;
//   } else if (conStatus == 41) {
//       state = 88;
//   } else if (conStatus == 42) {
//       state = 89;
//   } else if (conStatus == 43) {
//       state = 90;
//   } else if (conStatus == 44) {
//       state = 91;
//   } else if (conStatus == 45) {
//       state = 92;
//   } else if (conStatus == 46) {
//       state = 93;
//   } else if (conStatus == 47) {
//       state = 94;
//   } else if (conStatus == 48) {
//       state = 95;
//   } else {
//     state = 0;
//   }
// }
//
// function uconCar() {
//   let num5 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
//   // noLoop();
//   let uconStatus = random(num5);
//   console.log("Unconventional Career Number Fate ", uuconStatus);
//   if (uconStatus == 1) {
//     state = 107;
//   } else if (uconStatus == 2) {
//     state = 108;
//   } else if (uconStatus == 3) {
//     state = 109;
//   } else if (uconStatus == 4) {
//     state = 110;
//   } else if (uconStatus == 5) {
//       state = 111;
//   } else if (uconStatus == 6) {
//       state = 112;
//   } else if (uconStatus == 7) {
//       state = 113;
//   } else if (uconStatus == 8) {
//       state = 114;
//   } else if (uconStatus == 9) {
//       state = 115;
//   } else if (uconStatus == 10) {
//       state = 116;
//   } else if (uconStatus == 11) {
//       state = 117;
//   } else if (uconStatus == 12) {
//       state = 118;
//   } else if (uconStatus == 13) {
//       state = 119;
//   } else if (uconStatus == 14) {
//       state = 120;
//   } else if (uconStatus == 15) {
//       state = 121;
//   } else if (uconStatus == 16) {
//       state = 122;
//   } else if (uconStatus == 17) {
//       state = 123;
//   } else if (uconStatus == 18) {
//       state = 124;
//   } else {
//     state = 0;
//   }
// }

function mouseReleased() {
  state = state + 1;

  //goes through the "main menu"
  // if (state < 2) {
  //   state = state + 1;
  // }
  //
  // if (state == 27 || state == 39 ) {
  //   state = state + 1;
  // }

  // if (state == 39) {
  //   state = state + 1;
  // }

  //user taps to continue taking them to number of children
  // if (state >= 15 && state < 27) {
  //   state = 27;
  // }
  //
  // if (state >= 34 && state < 39) {
  //   state = 39;
  // }
  //
  // if (state == 44) {
  //   state =47;
  // }
}

// function touchStarted() {
//   getAudioContext().resume();
// }
