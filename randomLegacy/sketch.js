let state = 0;
// let words = ['apple', 'bear', 'cat', 'dog'];
// let timer = 0;
// let maxTimer = 11;

//fonts
let simsbold;
let simsboldSC;

function setup() {
  createCanvas(400, 800);
  textAlign(CENTER);

  simsbold = loadFont("assets/thesimssansbold.otf");
  simsboldSC = loadFont("assets/thesimssansboldsc.otf");
}

function draw() {
  background(66, 118, 183);
  textFont(simsboldSC);
  fill(166, 227, 41);
  // clear();
  switch (state) {
    case 0:
      background(66, 118, 183);
      textSize(20);
      text("Tap the screen to start randomization", width / 2, height / 2);
      // if (timer > maxTimer *60) {
      //   state = 1;
      // }
      break;

    case 1:
      background(66, 118, 183);
      push();
      textSize(30);
      text("Marital Status", width / 2, height / 2);
      pop();
      text("Tap to Continue", width / 2, height / 2 + 50);
      // state =2 ;
      break;

    case 2:
      ranFate();
      // legNum();
      // let mStatus = random(num1);
      // text(mStatus,width/2,height/2);
      // state = 3;
      break;

    case 3:
      push();
      textSize(30);
      text("Single", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      textSize(5);
      text("Your heir may not have a live-in partner after the first child is born.\n Any extra sims must be moved out of the house by 24 hours after the first child is born.\n A male heir may move in a female partner for the course of any pregnancies, \nbut the 24 hour rule applies and she may not contribute financially. \nPartners that have moved out are not allowed to lurk around the house to help out with toddler care, and must be removed if they will not leave.", width / 2, height / 2 + 50);
      pop();
      break;

    case 4:
      push();
      textSize(30);
      text("Couple", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      text("Your heir must obtain a romantic live-in partner.\nThey do not have to be married.", width / 2, height / 2 + 50);
      pop();
      break;

    case 5:
      push();
      textSize(30);
      text("Mixed Single", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      text("Children must be a mix of naturally-born and adopted. \nIf you have rolled to have only one child, you may have a second to satisfy this parameter.", width / 2, height / 2 + 50);
      pop();
      break;

    case 6:
      push();
      textSize(30);
      text("Mixed Couple", width / 2, height / 2);
      pop();
      // push();
      // textFont(simsbold);
      // text("", width / 2, height / 2 + 50);
      // pop();
      break;

    case 7:
      push();
      textSize(30);
      text("Second Chance", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      text("Your heir must obtain two live-in partners during the course of the generation. \nAt least one child must be born or adopted with the first partner.", width / 2, height / 2 + 50);
      pop();
      break;

    case 8:
      push();
      textSize(30);
      text("Single with Help", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      text("A non-romantic helper sim must live in the house. \nThe helper sim can be anything you desire, from a friend of the family to a spare who decides to stick around.", width / 2, height / 2 + 50);
      pop();
      break;

    case 9:
      push();
      textSize(30);
      text("Mixed Single with Help", width / 2, height / 2);
      pop();
      // push();
      // textFont(simsbold);
      // text("", width / 2, height / 2 + 50);
      // pop();
      // break;

    case 10:
      push();
      textSize(30);
      text("Couple with Help", width / 2, height / 2);
      pop();
      // push();
      // textFont(simsbold);
      // text("", width / 2, height / 2 + 50);
      // pop();
      break;

    case 11:
      push();
      textSize(30);
      text("Mixed Couple with Help", width / 2, height / 2);
      pop();
      // push();
      // textFont(simsbold);
      // text("", width / 2, height / 2 + 50);
      // pop();
      break;

    case 12:
      push();
      textSize(30);
      text("Single with 2 Help", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      text("The same as single with help, except there's two helpers. \nThe helpers may be romantically involved with each other.", width / 2, height / 2 + 50);
      pop();
      break;

    case 13:
      push();
      textSize(30);
      text("Mixed Single with 2 Help", width / 2, height / 2);
      pop();
      // push();
      // textFont(simsbold);
      // text("", width / 2, height / 2 + 50);
      // pop();
      break;

    case 14:
      push();
      textSize(30);
      text("Full House", width / 2, height / 2);
      pop();
      push();
      textFont(simsbold);
      text("The same as single with 2 help, except there's three helpers.", width / 2, height / 2 + 50);
      pop();
      break;

    //the point to move on to
    case 15:
      break;
  }
}

function ranFate() {
  // noLoop();
  let num1 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  // noLoop();
  let mStatus = random(num1);
  console.log(mStatus);
  text(mStatus, width / 2, height / 2);
  if (mStatus == 1 || mStatus < 6) {
    state = 3;
  } else if (mStatus > 5 && mStatus < 16) {
    state = 4;
  } else if (mStatus == 16) {
    state = 5;
  } else if (mStatus == 17) {
    state = 6;
  } else if (mStatus == 18) {
    state = 7;
  } else if (mStatus == 19) {
    state = 8;
  } else if (mStatus == 20) {
    state = 9;
  } else if (mStatus == 21) {
    state = 10;
  } else if (mStatus == 22) {
    state = 11;
  } else if (mStatus == 23) {
    state = 12;
  } else if (mStatus == 24) {
    state = 13;
  } else if (mStatus == 25) {
    state = 14;
  } else {
    state = 1;
  }
}

// function ranFateD() {
//   let num1 = ([1,26]) ;
//   let mStatus = random(num1);
//   text(mStatus,width/2,height/2);
// }

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}

// function touchStarted() {
//   getAudioContext().resume();
// }
