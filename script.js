function getComputerChoice(){
    let random_number =  Math.floor(Math.random() * 3);
    if (random_number == 1)
        return "rock";
    if (random_number == 2)
        return "Scissors";
    else
        return "Paper";
}

alert(getComputerChoice())