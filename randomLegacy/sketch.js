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

      // opening screen
    case 0:
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

      //marital status
    case 1:
      // background(66, 118, 183);
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 10, width, height / 4);
      pop();

      fill('white');
      push();
      textSize(50);
      text("Marital Status", width / 2, height / 2);
      pop();
      // image(heart,width/2,height/2,200,200);

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      text("Tap to Continue", width / 2, height / 2 + 300);
      // state = 2 ;
      break;

    case 2:
      ranFate();
      break;

    case 3: //single
      state = 15;
      break;

    case 4: //Couple
      state = 16;
      break;

    case 5: //mixed single
      state = 17;
      break;

    case 6: //mixed couple
      state = 18;
      break;

    case 7: //second chance
      state = 19;
      break;

    case 8: //single - help
      state = 20;
      break;

    case 9: //mixed single - help
      state = 21;
      break;

    case 10: //couple - help
      state = 22;
      break;

    case 11: //mixed couple - help
      state = 23;
      break;

    case 12: //single - 2 help
      state = 24;
      break;

    case 13: //mixed single - 2 help
      state = 25;
      break;

    case 14: //full house
      state = 26;
      break;

    case 15:
      // background(66, 118, 183);
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Single", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("Your heir may not have a live-in\npartner after the first child is born.", width / 2, height / 2 - 50);
      text("Any extra sims must be moved out of the\nhouse by 24 hours after the first child is born.", width / 2, height / 2 - 5);
      text("A male heir may move in a female partner\nfor the course of any pregnancies, but\nthe 24 hour rule applies and she may not\ncontribute financially.", width / 2, height / 2 + 40);
      text("Partners that have moved out are not\nallowed to lurk around the house to help\nout with toddler care, and must be\nremoved if they will not leave.", width / 2, height / 2 + 128);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 16:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Couple", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("Your heir must obtain a romantic\nlive-in partner.\nThey do not have to be married.", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 17:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Mixed Single", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("Children must be a mix of naturally-born and\nadopted.If you have rolled to have\nonly one child, you may have a\nsecond to satisfy this parameter.", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 18:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Mixed Couple", width / 2, height / 2 - 130);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 19:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Second Chance", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("Your heir must obtain two live-in partners\nduring the course of the generation.\nAt least one child must be\nborn or adopted with the first partner.", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 20:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Single with Help", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("A non-romantic helper sim must live in\nthe house. The helper sim can be anything\nyou desire, from a friend of the family to\na spare who decides to stick around.", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 21:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Mixed Single with Help", width / 2, height / 2 - 130);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 22:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Couple with Help", width / 2, height / 2 - 130);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 23:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Mixed Couple with Help", width / 2, height / 2 - 130);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 24:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Single with 2 Help", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("The same as single with help,\nexcept there's two helpers.\nThe helpers may be\nromantically involved with each other.", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 25:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Mixed Single with\n2 Help", width / 2, height / 2 - 130);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 26: //full house
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Marital Status", width / 2, height / 2 - 250);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Full House", width / 2, height / 2 - 130);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("The same as single with 2 help,\nexcept there's three helpers.", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //the point to move on to
    case 27:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 10, width, height / 4);
      pop();

      fill('white');
      push();
      textSize(50);
      text("Number of\nChildren", width / 2, height / 2 - 20);
      pop();
      // image(heart,width/2,height/2,200,200);

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 28:
      numKid();
      break;

    case 29:
      state = 34;
      break;
    case 30:
      state = 35;
      break;
    case 31:
      state = 36;
      break;
    case 32:
      state = 37;
      break;
    case 33:
      state = 38;
      break;

    case 34:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Number of Children", width / 2, height / 2 - 250);
      pop();


      textSize(200);
      fill(60, 185, 225);
      text("1", width / 2, height / 2 + 100);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 35:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Number of Children", width / 2, height / 2 - 250);
      pop();


      textSize(200);
      fill(60, 185, 225);
      text("2", width / 2, height / 2 + 100);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 36:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Number of Children", width / 2, height / 2 - 250);
      pop();


      textSize(200);
      fill(60, 185, 225);
      text("3", width / 2, height / 2 + 100);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 37:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Number of Children", width / 2, height / 2 - 250);
      pop();


      textSize(200);
      fill(60, 185, 225);
      text("4", width / 2, height / 2 + 100);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 38:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Number of Children", width / 2, height / 2 - 250);
      pop();


      textSize(200);
      fill(60, 185, 225);
      text("5", width / 2, height / 2 + 100);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //primary career
    case 39:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 10, width, height / 4);
      pop();

      fill('white');
      push();
      textSize(50);
      text("Primary Career", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;
    case 40:
      pCareer();
      break;
    case 41:
      state = 44;
      break;
    case 42:
      state = 45;
      break;
    case 43:
      state = 46;
      break;

    case 44:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Primary Career", width / 2, height / 2 - 250);
      pop();


      textSize(35);
      fill(60, 185, 225);
      text("Conventional \nCareer", width / 2, height / 2);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 45:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Primary Career", width / 2, height / 2 - 250);
      pop();


      textSize(35);
      fill(60, 185, 225);
      text("Unconventional \nCareer", width / 2, height / 2);


      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

    case 46:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(40);
      fill('white');
      text("Primary Career", width / 2, height / 2 - 250);
      pop();


      textSize(35);
      fill(60, 185, 225);
      text("Career Hopper", width / 2, height / 2 - 50);

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(18);
      text("Must roll for\nfive conventional careers", width / 2, height / 2);
      text("You may jump between these\ncareers as you wish,\nso long as you have spend a day at work in\nat least 3 by the time\nyour sims becomes a full adult,\nand all 5 by the time your\nsim becomes an elder", width / 2, height / 2 + 50);
      pop();
      break;

      //conventional careers
    case 47:
      conCar();
      break;

    case 48: //1
      state = 97;
      break;
    case 49: //2
      state = 98;
      break;
    case 50: //3
      state = 99;
      break;
    case 51: //4
      state = 100;
      break;
    case 52: //5
      state = 101;
      break;
    case 53: //6
      state = 102;
      break;
    case 54: //7
      state = 103;
      break;
    case 55: //8
      state = 104;
      break;
    case 56: //9
      state = 105;
      break;
    case 57: //10
      state = 106;
      break;
    case 58: //11
      state = 107;
      break;
    case 59: //12
      state = 108;
      break;
    case 60: //13
      state = 109;
      break;
    case 61: //14
      state = 110;
      break;
    case 62: //15
      state = 111;
      break;
    case 63: //16
      state = 111;
      break;
    case 64: //17
      state = 112;
      break;
    case 65: //18
      state = 113;
      break;
    case 66: //19
      state = 114;
      break;
    case 67: //20
      state = 115;
      break;
    case 68: //21
      state = 116;
      break;
    case 69: //22
      state = 117;
      break;
    case 70: //23
      state = 118;
      break;
    case 71: //24
      state = 119;
      break;
    case 72: //25
      state = 120;
      break;
    case 73: //26
      state = 121;
      break;
    case 74: //27
      state = 122;
      break;
    case 75: //28
      state = 123;
      break;
    case 76: //29
      state = 124;
      break;
    case 77: //30
      state = 125;
      break;
    case 78: //31
      state = 126;
      break;
    case 79: //32
      state = 127;
      break;
    case 80: //33
      state = 128;
      break;
    case 81: //34
      state = 129;
      break;
    case 82: //35
      state = 130;
      break;
    case 83: //36
      state = 131;
      break;
    case 84: //37
      state = 132;
      break;
    case 85: //38
      state = 133;
      break;
    case 86: //39
      state = 134;
      break;
    case 87: //40
      state = 135;
      break;
    case 88: //41
      state = 136;
      break;
    case 89: //42
      state = 137;
      break;
    case 90: //43
      state = 138;
      break;
    case 91: //44
      state = 139;
      break;
    case 92: //45
      state = 140;
      break;
    case 93: //46
      state = 141;
      break;
    case 94: //47
      state = 142;
      break;
    case 95: //47
      state = 143;
      break;
    case 96: //48
      state = 144;
      break;

      //actor
    case 97:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Actor", width / 2, height / 2);
      pop();
      break;

      //Astronaut - space ranger
    case 98:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Astronaut", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Space Ranger", width / 2, height / 2 + 20);
      pop();
      break;

      //Astronaut - Interstellar Smuggler
    case 99:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Astronaut", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Interstellar Smuggler", width / 2, height / 2 + 20);
      pop();
      break;

      //Athlete - Professional Athlete
    case 100:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Athlete", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Professional Athlete", width / 2, height / 2 + 20);
      pop();
      break;

      //Athlete - Bodybuilder
    case 101:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Athlete", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Bodybuilder", width / 2, height / 2 + 20);
      pop();
      break;

      //Business - Management
    case 102:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Business", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Management", width / 2, height / 2 + 20);
      pop();
      break;

      //Business - Investor
    case 103:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Business", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Investor", width / 2, height / 2 + 20);
      pop();
      break;

      //civil Designer - civic Planner
    case 104:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Civil Designer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Civic Planner", width / 2, height / 2 + 20);
      pop();
      break;

      //civil Designer - Green Technician
    case 105:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Civil Designer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Green Technician", width / 2, height / 2 + 20);
      pop();
      break;

      //conservationist - manager
    case 106:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Conservationist", width / 2, height / 2);
      //image
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Environmental Manager", width / 2, height / 2 + 20);
      pop();
      break;

      //conservationist - marine bio
    case 107:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Conservationist", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Marine Biologist", width / 2, height / 2 + 20);
      pop();
      break;

      //criminal - boss
    case 108:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Criminal", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Boss", width / 2, height / 2 + 20);
      pop();
      break;

      //criminal - Oracle
    case 109:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Criminal", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Oracle", width / 2, height / 2 + 20);
      pop();
      break;

      //critic - arts
    case 110:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Critic", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Arts", width / 2, height / 2 + 20);
      pop();
      break;

      //critic - food
    case 111:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Critic", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Food", width / 2, height / 2 + 20);
      pop();
      break;

      //culinary - chef
    case 112:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Culinary", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Chef", width / 2, height / 2 + 20);
      pop();
      break;

      //culinary - Mixologist
    case 113:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Culinary", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Mixologist", width / 2, height / 2 + 20);
      pop();
      break;

      //Detective
    case 114:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Detective", width / 2, height / 2);
      pop();
      break;

      //doctor
    case 115:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Doctor", width / 2, height / 2);
      pop();
      break;

      //education - Administrator
    case 116:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Education", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Administrator", width / 2, height / 2 + 20);
      pop();
      break;

      //education - Professor
    case 117:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Education", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Professor", width / 2, height / 2 + 20);
      pop();
      break;

      //Engineer - computer Engineer
    case 118:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Engineer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Computer Engineer", width / 2, height / 2 + 20);
      pop();
      break;

      //Engineer - Mechanical Engineer
    case 119:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Engineer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Mechanical Engineer", width / 2, height / 2 + 20);
      pop();
      break;

      //Entertainer - Musician
    case 120:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Entertainer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Musician", width / 2, height / 2 + 20);
      pop();
      break;

      //Entertainer - Comedian
    case 121:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Entertainer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Comedian", width / 2, height / 2 + 20);
      pop();
      break;

      //Gardener - Botanist
    case 122:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Gardener", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Botanist", width / 2, height / 2 + 20);
      pop();
      break;

      //Gardener - floral
    case 123:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Gardener", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Floral Designer", width / 2, height / 2 + 20);
      pop();
      break;

      //law - judge
    case 124:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Law", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Judge", width / 2, height / 2 + 20);
      pop();
      break;

      //law - private Attorney
    case 125:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Law", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Private Attorney", width / 2, height / 2 + 20);
      pop();
      break;

      //Military - Covert Operator
    case 126:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Military", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Covert Operator", width / 2, height / 2 + 20);
      pop();
      break;

      //Military - Officer
    case 127:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Military", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Officer", width / 2, height / 2 + 20);
      pop();
      break;

      //Painter - Master of the real
    case 128:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Painter", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Master of the Real", width / 2, height / 2 + 20);
      pop();
      break;

      //Painter - master of the Arts
    case 129:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Painter", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Master of the Arts", width / 2, height / 2 + 20);
      pop();
      break;

      //Politician - Politician
    case 130:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Politician", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Politician", width / 2, height / 2 + 20);
      pop();
      break;

      //Politician - Charity Organizer
    case 131:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Politician", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Charity Organizer", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //Salaryperson - Expert
    case 132:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Salaryperson", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Expert", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //Salaryperson - Supervisor
    case 133:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Salaryperson", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Supervisor", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //Scientist
    case 134:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Scientist", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //Secret Agent - Diamond
    case 135:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Secret Agent", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Diamond Agent", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //Secret Agent - villian
    case 136:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Secret Agent", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Villian", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //social media - Internet Personality
    case 137:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Social Media", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Internet Personality", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //social media - public relations
    case 138:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Social Media", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Public Relations", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //Style Influencer - Trendsetter
    case 139:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Style Influencer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Trendsetter", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //style Influencer - stylist
    case 140:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Style Influencer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Stylist", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //tech guru - esport
    case 141:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Tech Guru", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("eSport Gamer", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //tech guru - start-up
    case 142:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Tech Guru", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Start-up Entrepreneur", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //writer - author
    case 143:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Writer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Author", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //writer - Journalist
    case 144:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Conventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Writer", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Journalist", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
      break;

      //unconventional careers
    case 145:
      uconCar();
      break;

    case 146: //1
      state = 165;
      break;
    case 147: //2
      state = 166;
      break;
    case 148: //3
      state = 167;
      break;
    case 149: //4
      state = 168;
      break;
    case 150: //5
      state = 169;
      break;
    case 151: //6
      state = 170;
      break;
    case 152: //7
      state = 171;
      break;
    case 153: //8
      state = 172;
      break;
    case 154: //9
      state = 173;
      break;
    case 155: //10
      state = 174;
      break;
    case 156: //11
      state = 175;
      break;
    case 157: //12
      state = 176;
      break;
    case 158: //13
      state = 177;
      break;
    case 159: //14
      state = 178;
      break;
    case 160: //15
      state = 179;
      break;
    case 161: //16
      state = 180;
      break;
    case 162: //17
      state = 181;
      break;
    case 163: //18
      state = 182;
      break;
    case 164: //19
      state = 183;
      break;

      //freelance - painter
    case 165:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Painter", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance - author
    case 166:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Author", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance - musician
    case 167:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Musician", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance - crafter
    case 168:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Crafter", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance - Paranormal
    case 169:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Paranormal Investigator", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance - Photographer
    case 170:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Photographer", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance Comedian
    case 171:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Comedian", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //freelance Programmer
    case 172:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Freelance", width / 2, height / 2);
      pop();

      push();
      fill(60, 170, 214);
      textFont(simsbold);
      textSize(25);
      text("Programmer", width / 2, height / 2 + 20);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //gardener
    case 173:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Gardener", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //fisherman
    case 174:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Fisherman", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //treasure hunter
    case 175:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Treasure Hunter", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //space explorer
    case 176:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Space Explorer", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //professional gamer
    case 177:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Professional Gamer", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //Cybercriminal
    case 178:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Cybercriminal", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //professional host/Hostess
    case 179:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Professional\nHost/Hostess", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //remedy brewer
    case 180:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Remedy Brewer", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //retail owner
    case 181:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Retail Owner", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //dj
    case 182:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("DJ", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      break;

      //resauranteur
    case 183:
      background('white');

      push();
      fill(66, 118, 183);
      rect(width / 2, height / 2 - 260, width, height / 8);
      pop();

      push();
      textSize(45);
      fill('white');
      text("Unconventional", width / 2, height / 2 - 265);
      text("Career", width / 2, height / 2 - 225);
      pop();

      push();
      textSize(35);
      fill(60, 185, 225);
      text("Restauranteur", width / 2, height / 2);
      pop();

      push();
      fill(33, 185, 107);
      rect(width / 2, height / 2 + 290, 300, 50, 55);
      pop();
      textSize(25);
      fill('white');
      text("Tap to Continue", width / 2, height / 2 + 300);
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

function numKid() {
  let num2 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let nStatus = random(num2);
  console.log("Kids Number Fate ", nStatus);
  if (nStatus == 1 || nStatus == 2) {
    state = 29;
  } else if (nStatus >= 3 && nStatus <= 6) {
    state = 30;
  } else if (nStatus == 7 || nStatus == 8) {
    state = 31;
  } else if (nStatus == 9) {
    state = 32;
  } else if (nStatus == 10) {
    state = 33;
  } else {
    state = 0;
  }
}

function pCareer() {
  let num3 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let pStatus = random(num3);
  console.log("Primary Career Number Fate ", pStatus);
  if (pStatus >= 1 && pStatus < 7) {
    state = 41;
  } else if (pStatus >= 7 && pStatus < 10) {
    state = 42;
  } else if (pStatus == 10) {
    state = 43;
  } else {
    state = 0;
  }
}

function conCar() {
  let num4 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48])
  let conStatus = random(num4);
  console.log("Conventional Career Number Fate ",conStatus);
  if (conStatus == 1) {
    state = 48;
  } else if (conStatus == 2) {
    state = 49;
  } else if (conStatus == 3) {
    state = 50;
  } else if (conStatus == 4) {
    state = 51;
  } else if (conStatus == 5) {
      state = 52;
  } else if (conStatus == 6) {
      state = 53;
  } else if (conStatus == 7) {
      state = 54;
  } else if (conStatus == 8) {
      state = 55;
  } else if (conStatus == 9) {
      state = 56;
  } else if (conStatus == 10) {
      state = 57;
  } else if (conStatus == 11) {
      state = 58;
  } else if (conStatus == 12) {
      state = 59;
  } else if (conStatus == 13) {
      state = 60;
  } else if (conStatus == 14) {
      state = 61;
  } else if (conStatus == 15) {
      state = 62;
  } else if (conStatus == 16) {
      state = 63;
  } else if (conStatus == 17) {
      state = 64;
  } else if (conStatus == 18) {
      state = 65;
  } else if (conStatus == 19) {
      state = 66;
  } else if (conStatus == 20) {
      state = 67;
  } else if (conStatus == 21) {
      state = 68;
  } else if (conStatus == 22) {
      state = 69;
  } else if (conStatus == 23) {
      state = 70;
  } else if (conStatus == 24) {
      state = 71;
  } else if (conStatus == 25) {
      state = 72;
  } else if (conStatus == 26) {
      state = 73;
  } else if (conStatus == 27) {
      state = 74;
  } else if (conStatus == 28) {
      state = 75;
  } else if (conStatus == 29) {
      state = 76;
  } else if (conStatus == 30) {
      state = 77;
  } else if (conStatus == 31) {
      state = 78;
  } else if (conStatus == 32) {
      state = 79;
  } else if (conStatus == 33) {
      state = 80;
  } else if (conStatus == 34) {
      state = 81;
  } else if (conStatus == 35) {
      state = 82;
  } else if (conStatus == 36) {
      state = 83;
  } else if (conStatus == 37) {
      state = 84;
  } else if (conStatus == 38) {
      state = 85;
  } else if (conStatus == 39) {
      state = 86;
  } else if (conStatus == 40) {
      state = 87;
  } else if (conStatus == 41) {
      state = 88;
  } else if (conStatus == 42) {
      state = 89;
  } else if (conStatus == 43) {
      state = 90;
  } else if (conStatus == 44) {
      state = 91;
  } else if (conStatus == 45) {
      state = 92;
  } else if (conStatus == 46) {
      state = 93;
  } else if (conStatus == 47) {
      state = 94;
  } else if (conStatus == 48) {
      state = 95;
  } else {
    state = 0;
  }
}

function uconCar() {
  let num5 = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19]);
  // noLoop();
  let uconStatus = random(num5);
  console.log("Unconventional Career Number Fate ", uconStatus);
  if (uconStatus == 1) {
    state = 146;
  } else if (uconStatus == 2) {
    state = 147;
  } else if (uconStatus == 3) {
    state = 148;
  } else if (uconStatus == 4) {
    state = 149;
  } else if (uconStatus == 5) {
      state = 150;
  } else if (uconStatus == 6) {
      state = 151;
  } else if (uconStatus == 7) {
      state = 152;
  } else if (uconStatus == 8) {
      state = 153;
  } else if (uconStatus == 9) {
      state = 154;
  } else if (uconStatus == 10) {
      state = 155;
  } else if (uconStatus == 11) {
      state = 156;
  } else if (uconStatus == 12) {
      state = 157;
  } else if (uconStatus == 13) {
      state = 158;
  } else if (uconStatus == 14) {
      state = 159;
  } else if (uconStatus == 15) {
      state = 160;
  } else if (uconStatus == 16) {
      state = 161;
  } else if (uconStatus == 17) {
      state = 162;
  } else if (uconStatus == 18) {
      state = 163;
  } else if (uconStatus == 19) {
      state = 164;
  } else {
    state = 0;
  }
}

function mouseReleased() {
  // state = state + 1;

  // goes through the "main menu"
  if (state < 2) {
    state = state + 1;
  }

  if (state == 27 || state == 39 ) {
    state = state + 1;
  }

  // user taps to continue taking them to number of children
  if (state >= 15 && state < 27) {
    state = 27;
  }

  if (state >= 34 && state < 39) {
    state = 39;
  }

  if (state == 44) {
    state =47;
  }

  if (state == 45) {
    state = 145;
  }
}

// function touchStarted() {
//   getAudioContext().resume();
// }
