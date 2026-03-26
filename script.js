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
    let user_choice = prompt("Enter one choice rock,paper or scissors");
    return user_choice;
}

alert(getHumanChoice());