/*global $*/

$(document).ready(function(){

        var userChoice;

        var winner;
        var choices = ["rock", "paper", "scissors"];

        var userPoints = 0;


        function notValid(){
                alert("Invalid Input, try again");
                $("input[type=text], textarea").val("");
        }
        
        function RPS(finalCompChoice) {
                if(finalCompChoice===userChoice){
                        $("#result").html("DRAW");
                        winner = "none";
                }
                else if(finalCompChoice==="rock" && userChoice==="scissors"){
                        $("#result").html("you lose");
                        winner = "computer";
                }
                else if(finalCompChoice==="rock" && userChoice==="paper"){
                        $("#result").html("you win");
                        winner = "user";
                }
                else if(finalCompChoice==="paper" && userChoice==="scissors"){
                        $("#result").html("you win");
                        winner = "user";
                }
                else if(finalCompChoice==="paper" && userChoice==="rock"){
                        $("#result").html("you lose");
                        winner = "computer";
                }
                else if(finalCompChoice==="scissors" && userChoice==="rock"){
                        $("#result").html("you win");
                        winner = "user";
                }
                else if(finalCompChoice==="scissors" && userChoice==="paper"){
                        $("#result").html("you lose");
                        winner = "computer";
                }
        }
        
        function points(){
                if(winner==="user"){
                        userPoints++;
                        return userPoints;
                }
        }
        
        function displayResult(){
                $("#index").hide();
                if(winner==="user"){
                        $("#youWon").show();
                }
                else if(winner==="computer"){
                        $("#youLost").show();
                }
                else if (winner==="none"){
                        $("#Draw").show();
                }
        }
        
        
        $("#userInput").keyup(function(event) {
                if (event.keyCode === 13) {
                        $("#shoot").click();
                }
        });

        
        $("#shoot").click(function(){
                var computerChoice = Math.floor(Math.random() * 3);
                var finalCompChoice = choices[computerChoice];
                userChoice=$("#userInput").val();
                userChoice = userChoice.toString().toLowerCase();
                if(userChoice!=="rock" && userChoice!== "paper" && userChoice!== "scissors"){
                        notValid();
                }
                else{
                  $(".yourMove").html(userChoice);
                  $(".computerMove").html(finalCompChoice);
                  RPS(finalCompChoice);
                  points();
                 
                  $(".counter").val(userPoints);
                  displayResult();
                }
                
                
                
        });
        
        $(".again").click(function() {
            $("#index").show();
            $("#youWon, #youLost, #Draw").hide();
            $("#userInput").val("");
        });


});
