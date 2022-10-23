
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
computerPlay();
//////////////////////////////////////
//for game function
let playerScore=0;
let tieScore=0;
let computerScore=0;
let userInput,computerInput;

function playRound(userInput,computerInput){
    userInput = prompt("please,enter your choice");
    userInput = userInput.toLowerCase();
    console.log(userInput);
    computerInput = computerPlay();
    console.log(computerInput);

    if (userInput=="rock" && computerInput=="scissors" || userInput=="paper" && computerInput=="rock"  || userInput=="scissors" && computerInput=="paper")
        { 
            playerScore++;
            return "You win this round "+userInput+" beats "+computerInput;
        }
        else if (userInput=="rock" && computerInput=="paper" || userInput=="scissors" && computerInput=="rock"  || userInput=="paper" && computerInput=="scissors")
            {
                computerScore++;
                return "You lose this round "+computerInput + " beats "+userInput;
            }
            else if (userInput  == computerInput)
                    {
                        tieScore++;
                        return "the game is tie";
                    } 
   else 
   {
   
     return  alert("you must input rock, paper or scissors");;
   
   } 

}
//let userInput="R2cK";
// let userInput="RocK";
// const computerInput=computerPlay();
// userInput = userInput.toLowerCase();
// document.write(computerInput +"\r");
// document.write(userInput +"\r");
// document.write(playRound(userInput,computerInput));
////////////////////////////////////////////////////////////

   function game() 
   {
        for (let i = 0; i <=5; i++) 
        { 
            console.log(playRound(userInput,computerInput));
            console.log(i);
         }
                    if (playerScore>computerScore){
                        return "You win this game";
                    }
                        if (playerScore==computerScore){
                        return "This game is a tie";
                        }
                    else{
                       
                      return "You lose this game";
                    }
                

    }
       console.log(game());
