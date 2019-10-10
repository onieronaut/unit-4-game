$(document).ready(function() {
    console.log( "ready!" );


var blueCrystal = $("#blue");
var redCrystal = $("#red");
var purpleCrystal = $("#purple");
var blackCrystal = $("#black");
var counter = 0;
var targetNumber = 0;
var wins = 0;
var losses = 0;
var randomNumbers = [];


//Generate 4 random numbers, from 1-12
function generateNumbers() {
    for (let i=0; i < 4; i++)  {
        randomNumbers[i] = Math.floor(Math.random() * 12) + 1;
    }
}

//Distribute random numbers to the 4 crystals
function distributeNumbers() {
    blueCrystal.attr("value", randomNumbers[0]);
    redCrystal.attr("value", randomNumbers[1]);
    purpleCrystal.attr("value", randomNumbers[2]);
    blackCrystal.attr("value", randomNumbers[3]);
}

//Create random target number
function generateTarget() {
    targetNumber = Math.floor(Math.random() * 100) + 19;
}

//Reset game on win/loss
function resetGame() {
    generateTarget();
    generateNumbers();
    distributeNumbers();
}

//Start of program - Initializing functions
generateTarget();
generateNumbers();
distributeNumbers();
console.log(randomNumbers);
console.log(targetNumber);
$("#target").text(targetNumber);

//Click on crystal
$(".crystalImage").on("click", function() {
    var crystalValue = $(this).attr("value");
    counter += parseInt(crystalValue);
    console.log(counter);
    
    if (counter === targetNumber) {
        wins++;
        
        resetGame();
    }

    if (counter > targetNumber) {
        losses++;
        resetGame();
    }

});

});