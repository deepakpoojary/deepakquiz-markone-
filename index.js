var readlineSync = require("readline-sync");
var userName = readlineSync.question("Whats your name ");
console.log("welcome "+ userName+ " to DO YOU KNOW Deepak quiz ?");

var score = 0;

var userAnswer1 = readlineSync.question("Where do I live");
var Answer1 = "Bangalore";
test(userAnswer1,Answer1);

var userAnswer2 = readlineSync.question("My favorite superhero");
var Answer2 = "Superman";
test(userAnswer2,Answer2);

var userAnswer3 = readlineSync.question("Where do I study");
var Answer3 = "Nmamit";
test(userAnswer3,Answer3);


//how to do functions 
function add(num1, num2){
  var add = num1 + num2;
  return sum;
}

//this function to see whether the answer is correct or not and to return the score

function test (userAnswer,actualAnswer){
  if( userAnswer ===actualAnswer){
  score= score +1;
  console.log("you are right");
  console.log("your current score:"+ score);
}
else{

  console.log("you are wrong");
  console.log("your current score:"+ score);
}
  return score;
}