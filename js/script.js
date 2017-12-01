/*global $*/

$(document).ready(function(){
        // $(".movesDisplay", "#resultsDisplay", "#playAgain").hide();
        
        var userChoice="";
        var computerChoice=Math.floor(Math.random() * 3); 
        var finalCompChoice= 0;
        
        function RPS() {
                if(finalCompChoice===userChoice){
                        $("#result").append("DRAW");
                }
                else if(finalCompChoice==="rock" && userChoice==="scissors"){
                        $("#result").append("you lose");
                }
                else if(finalCompChoice==="rock" && userChoice==="paper"){
                        $("#result").append("you win");
                }
                else if(finalCompChoice==="paper" && userChoice==="scissors"){
                        $("#result").append("you win");
                }
                else if(finalCompChoice==="paper" && userChoice==="rock"){
                        $("#result").append("you lose");
                }
                else if(finalCompChoice==="scissors" && userChoice==="rock"){
                        $("#result").append("you win");
                }
                else if(finalCompChoice==="scissors" && userChoice==="paper"){
                        $("#result").append("you lose");
                }
        }
        
        function notValid(){
                alert("Invalid Input, try again");
                $("input[type=text], textarea").val("");
        }
        
        if(computerChoice===0){
                finalCompChoice="rock";
        }
        else if(computerChoice===1){
                finalCompChoice="paper";
        }
        else if(computerChoice===2){
                finalCompChoice="scissors";
        }

        // $("#shoot").click(function(){
        //         userChoice=$("input").val();
        //         $("#yourMove").append(userChoice);
        //         $("#computerMove").append(finalCompChoice); 
        //         RPS();
        // });
        
        $("#shoot").click(function(){
                userChoice=$("#userInput").val();
                if(userChoice!=="rock" && userChoice!== "paper" && userChoice!== "scissors"){
                        notValid();
                }
                else{
                $("#yourMove").append(userChoice);
                $("#computerMove").append(finalCompChoice); 
                RPS();}
        });
        
        $("#userInput").keyup(function(event) {
                if (event.keyCode === 13) {
                        $("#shoot").click();
                }
                });

        $("#again").click(function(){
                
        });
        
});

   
   


   
   
        


//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION

