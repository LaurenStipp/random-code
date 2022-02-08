// let words = ['Aang','Katara','Sokka','Zuko','Toph','Azula'];
let nStatus = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let nKids = [1,2,3,4,5,6,7,8,9,10];
let nPrimary = [];
//within the function call the career
let nSecondary = [];
//within the function call the career

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  // randomWord();
  numStatus();
  numKids();
}

function draw() {
}


// function randomWord() {
//   let word = random(words);
//   text(word,width/2,height/2);
//
// }

function numStatus() {
  let num2 = random(nKids);
  if (num2 >= 1 && num2 <=6) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('SINGLE',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 > 6 && num2 <= 15) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('COUPLE',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 ==16){
    text('MARITAL STATUS',width/2,height/2-100);
    text('MIXED SINGLE',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 17) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('MIXED COUPLE',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 18) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('SECOND CHANCE',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 19) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('SINGLE WITH HELP',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 20) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('MIXED SINGLE WITH HELP',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 21) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('COUPLE WITH HELP',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 22) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('MIXED COUPLE WITH HELP',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 23) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('SINGLE WITH TWO HELP',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 24) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('MIXED SINGLE WITH TWO HELP',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  } else if (num2 == 25) {
    text('MARITAL STATUS',width/2,height/2-100);
    text('FULLHOUSE',width/2,height/2-90);
    text(num2,width/2,height/2-80);
  }else {
    text('BROKEN',width/2,height/2+15);
    text(num2,width/2,height/2+30);
  }
}

function numKids() {
  let num1 = random(nKids);
  if (num1 == 1 || num1 == 2) {
    text('NUMBER OF KIDS',width/2,height/2);
    text('ONE',width/2,height/2+15);
    text(num1,width/2,height/2+30);
  } else if (num1 > 2 && num1 <= 6) {
    text('NUMBER OF KIDS',width/2,height/2);
    text('TWO',width/2,height/2+15);
    text(num1,width/2,height/2+30);
  } else if (num1 == 7 || num1 == 8){
    text('NUMBER OF KIDS',width/2,height/2);
    text('THREE',width/2,height/2+15);
    text(num1,width/2,height/2+30);
  } else if (num1 == 9) {
    text('NUMBER OF KIDS',width/2,height/2);
    text('FOUR',width/2,height/2+15);
    text(num1,width/2,height/2+30);
  } else if (num1 == 10) {
    text('NUMBER OF KIDS',width/2,height/2);
    text('FIVE',width/2,height/2+15);
    text(num1,width/2,height/2+30);
  } else {
    text('BROKEN',width/2,height/2+15);
    text(num1,width/2,height/2+30);
  }

}

//marital Status
//Children
//primary career
//generation goal
//miscellaneous fun
