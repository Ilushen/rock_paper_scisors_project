

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





function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let turn = 0
    
    function playRound(humanChoice,computerChoice){

        if (humanChoice == 'rock' & computerChoice == 'scissors'){
            alert("You Win! "+humanChoice+" beats "+computerChoice);
            humanScore +=1;}
        else if (humanChoice == 'scissors' & computerChoice == 'paper'){
            alert("You Win! "+humanChoice+" beats "+computerChoice);
            humanScore +=1;}
        else if (humanChoice == 'paper' && computerChoice == 'rock'){
            alert("You Win! "+humanChoice+" beats "+computerChoice);
            humanScore +=1;}
        else{
            alert("You Lose! "+computerChoice+" beats "+humanChoice);
            computerScore +=1;
        }  

    }

    while(turn < 5){
        playRound(getHumanChoice(),getComputerChoice());
        turn +=1;
    }

    alert("Your Total Score is: "+humanScore+" and the computer Total Score is "+computerScore);

}

playGame();