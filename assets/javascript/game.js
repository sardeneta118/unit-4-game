$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
// Selects the random number shown at the start of the game should be between 19-120.
    $('#randomNumber').text(Random);
// Appending random number to the randomNumber id in the html file
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
// Setting up random numbers for each jewel 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
//Decaring variables for tallies after each game is over
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
//make game reset
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
//adds the wins to the userTotal
  function yay(){
  alert("You think you're huh!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
//addes the losses to the userTotal
  function loser(){
  alert ("Try again son!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
//click for jewel
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
// figure out the clicks for the rest of the jewels
// need to set up win/lose conditions
    })   
  }); 