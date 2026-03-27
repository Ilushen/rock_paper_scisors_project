
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random_number =  Math.floor(Math.random() * 3);
    if (random_number == 1)
        return "rock";
    if (random_number == 2)
        return "scissors";
    else
        return "paper";
}

//alert(getComputerChoice())

function getHumanChoice(){
    let user_choice = prompt("Enter one choice rock,paper or scissors").toLowerCase();
    return user_choice;
}

//alert(getHumanChoice());

const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');

rock_btn.addEventListener("click", () => {
playGame("rock");
});

paper_btn.addEventListener("click", () => {
playGame("paper");
});

scissors_btn.addEventListener("click", () => {
playGame("scissors");
});

const cont = document.querySelector('#container');
const round_result = document.createElement("p");
const score_result = document.createElement("p");

cont.appendChild(round_result);
cont.appendChild(score_result);


function playGame(choice){

    let turn = 0;
    let round = ""
    
    function playRound(humanChoice,computerChoice) {

        if (humanChoice == 'rock' & computerChoice == 'scissors'){
            round= "You Win! "+humanChoice+" beats "+computerChoice;
            humanScore +=1;}
        else if (humanChoice == 'scissors' & computerChoice == 'paper'){
            round = "You Win! "+humanChoice+" beats "+computerChoice ;
            humanScore +=1;}
        else if (humanChoice == 'paper' && computerChoice == 'rock'){
            round = "You Win! "+humanChoice+" beats "+computerChoice;
            humanScore +=1;}
        else{
            round = "You Lose! "+computerChoice+" beats "+humanChoice;
            computerScore +=1;
        }  

        round_result.textContent =  round;
        

    }

    playRound(choice,getComputerChoice());

    if (check_winner() == 1)
        score_result.textContent = "You winn!!!!! Your Total Score is: "+humanScore+" and the computer Total Score is "+computerScore;
    else if (check_winner() == 2)
        score_result.textContent = "You Loose!!!!! Your Total Score is: "+humanScore+" and the computer Total Score is "+computerScore;
    else if (check_winner() == 0)
        score_result.textContent = "Your Total Score is: "+humanScore+" and the computer Total Score is "+computerScore;

}


function check_winner(){
    if (humanScore == 5)
        return 1;
    else if (computerScore == 5)
        return 2;
    else
        return 0
}