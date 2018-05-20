var targetNumber = Math.floor(Math.random()* (120 - 19)+19);

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");
var counter = 0;
var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12)+1);

crystals.on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New Score: " + counter);
    if (counter === targetNumber){
    alert("You Win!");
    }

    else if (counter >= targetNumber) {
    alert("You Lose!");
    }
       


        
})