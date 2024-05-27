enum HandChoices {
    Rock,
    Paper,
    Scissors
}

const ChoiceRules = {
    [HandChoices.Rock]: [HandChoices.Scissors],
    [HandChoices.Paper]: [HandChoices.Rock],
    [HandChoices.Scissors]: [HandChoices.Paper]
};

const ChoiceHandler = (choice1: HandChoices, choice2: HandChoices): HandChoices => {
    return ChoiceRules[choice1].includes(choice2) ? choice1 : choice2;
};
const WinnerHandler = (player1Choice: HandChoices, player2Choice: HandChoices): String => {
    return ChoiceRules[player1Choice].includes(player2Choice) ? "Player1": ChoiceRules[player2Choice].includes(player1Choice)? "Player2" : "Tie";
};
