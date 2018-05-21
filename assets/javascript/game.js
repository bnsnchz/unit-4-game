$(document).ready(function() {
var Random = Math.floor(Math.random()* (120 - 19)+19)

$("#number-to-guess").text(Random);

var counter = 0;
var wins = 0;
var losses = 0;
var numberOption1 = Math.floor(Math.random() * 12)+1;
var numberOption2 = Math.floor(Math.random() * 12)+1; 
var numberOption3 = Math.floor(Math.random() * 12)+1;
var numberOption4 = Math.floor(Math.random() * 12)+1; 

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset(){
   Random = Math.floor(Math.random()* (120 - 19)+19)
    console.log(Random);
    $("#number-to-guess").text(Random);
    var numberOption1 = Math.floor(Math.random() * 12)+1;
    var numberOption2 = Math.floor(Math.random() * 12)+1;
    var numberOption3 = Math.floor(Math.random() * 12)+1;
    var numberOption4 = Math.floor(Math.random() * 12)+1; 
    counter= 0;
    $("#total").text(counter);
    } 

    function winner(){
        alert("You won!");
          wins++; 
          $("#numberWins").text(wins);
          reset();
        }
       
    function loser(){
        alert ("You lose!");
          losses++;
          $("#numberLosses").text(losses);
          reset();
        }


$("#crystal1").on ("click", function(){
    counter = counter + numberOption1;
    console.log("New Total= " + counter);
    $("#total").text(counter); 
          if (counter == Random){
          winner();
          
        }
        else if ( counter > Random){
          loser();
          
        }   
       
  })  
  $("#crystal2").on ("click", function(){
    counter = counter + numberOption2;
    console.log("New Total= " + counter);
    $("#total").text(counter); 
        if (counter == Random){
          winner();
          
        }
        else if ( counter > Random){
          loser();
          
        } 
  })  
  $("#crystal3").on ("click", function(){
    counter = counter + numberOption3;
    console.log("New Total= " + counter);
    $("#total").text(counter);

          if (counter == Random){
          winner();
          
        }
        else if ( counter > Random){
          loser();
          
        } 
  })  
  $("#crystal4").on ("click", function(){
    counter = counter + numberOption4;
    console.log("New Total= " + counter);
    $("#total").text(counter); 
      
          if (counter == Random){
          winner();
          
        }
        else if (counter > Random){
          loser();
          
        }
  });   
});