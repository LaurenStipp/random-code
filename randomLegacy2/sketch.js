let state = 0;

//for rect
//x = x location
//y = y location
//w = rect width
//h = rect height
// x = ;
// y = ;
// w = ;
// h = ;


// //marital status
// let mx = 200;
// let my = 190;
// let mw = 300;
// let mh = 50;
// let mr = 55;
//
// //Number of Children
// let nx = 200;
// let ny = 260;
// let nw = 300;
// let nh = 50;
// let nr = 55;
//
// //Primary Career
// let px = 200;
// let py = 330;
// let pw = 300;
// let ph = 50;
// let pr = 55;
//
// //Secondary Career;
// let sx = 200;
// let sy = 400;
// let sw = 300;
// let sh = 50;
// let sr = 55;
//
// //Generation Goals
// let gx = 200;
// let gy = 470;
// let gw = 300;
// let gh = 50;
// let gr = 55;
//
// //Miscellaneous Fun
// let fx = 200;
// let fy = 540;
// let fw = 300;
// let fh = 50;
// let fr = 55;
//
// //random traits
// let rx = 200;
// let ry = 610;
// let rw = 300;
// let rh = 50;
// let rr = 55;
//
// //credits
// let cx = 200;
// let cy = 750;
// let cw = 150;
// let ch = 50;
// let cr = 55;

//fonts
let simsbold;
let simsboldSC;

// function preload() {
//   simsbold = loadFont("assets/thesimssansbold.otf");
//   simsboldSC = loadFont("assets/thesimssansboldsc.otf");
// }

function setup() {
  createCanvas(400, 800);
  textAlign(CENTER);
  rectMode(CENTER);
  simsbold = loadFont("assets/thesimssansbold.otf");
  simsboldSC = loadFont("assets/thesimssansboldsc.otf");

  //all screen will hide the menu buttons and will have a back button
}

function draw() {
  background(66, 118, 183);
  noStroke();
  switch (state) {
    case 0:
      fill(166, 227, 41);
      textFont(simsboldSC);
      textSize(40);
      text("Sims 4",width/2,height/2-350);
      text("Random Generator",width/2,height/2-315);

      fill(60,185,225);
      textSize(35);
      text("Choose An Option:",width/2,height/2-265);

      //marital status
      fill('white');
      rect(width/2, height/2-210,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Marital Status",width/2, height/2-200);
      // pop();

      //Number of Children
      fill('white');
      rect(width/2, height/2-140,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Number of Children",width/2, height/2-130);
      // pop();

      //Primary Career
      fill('white');
      rect(width/2, height/2-70,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Primary Career",width/2, height/2-60);
      // pop();

      //Secondary Career
      fill('white');
      rect(width/2, height/2,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Secondary Career",width/2, height/2+10);
      // pop();

      //Generation Goals
      fill('white');
      rect(width/2, height/2+70,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Generation Goals",width/2, height/2+80);
      // pop();

      //Miscellaneous Fun
      fill('white');
      rect(width/2, height/2+140,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Miscellaneous Fun",width/2, height/2+150);
      // pop();


      //random traits
      fill('white');
      rect(width/2, height/2+210,300,50,55);
      // push();
      // fill(33,185,107);
      // textSize(30);
      // textFont(simsbold);
      // text("Random Traits",width/2, height/2+220);
      // pop();

      //credits
      // fill('white');
      // if(credHov(cx,cy,cw,ch)) {
      //   fill(33,185,107)
      //   rect(cx,cy,cw,ch,cr);
      //   push();
      //   fill('white');
      //   textSize(30);
      //   textFont(simsbold);
      //   text("Credits",width/2, height/2+360);
      //   pop();
      // } else {
      //   fill('white');
      //   rect(cx,cy,cw,ch,cr);
      //   push();
      //   fill(33,185,107);
      //   textSize(30);
      //   textFont(simsbold);
      //   text("Credits",width/2, height/2+360);
      //   pop();
      // }
      // fill('white');
      //   rect(cx,cy,cw,ch,cr);
      //   push();
      //   fill(33,185,107);
      //   textSize(30);
      //   textFont(simsbold);
      //   text("Credits",width/2, height/2+360);
      //   pop();
      break;

      case 1:
      maritalStat();
      break;

      //credits - for now
      case 2:
      fill(166, 227, 41);
      textFont(simsboldSC);
      textSize(40);
      text("Credits",width/2,height/2);
      break;

  }
}

//marital status fate
function maritalStat() {
  let num1 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  let mStatus = random(num1);
  console.log(mStatus);
}

function credHov(x,y,w,h) {
  if (mouseX > x && mouseX < x+w+.1 && mouseY > y && mouseY < y+h-25) {
  return true;
} else {
  return false;
}
}

// function mouseReleased(cx,cy,cw,ch) {
//
//   //credits
//   if ((mouseX > cx && mouseX < cx+cw && mouseY > cy && mouseY < cy+ch)) {
//     // state = 2;
//     // state=state + 1;
//     // if (state > 2){
//     //   state = 0;
//     // }
//   }
// }






//IGNORE
function touchStarted() {
  getAudioContext().resume();
}
