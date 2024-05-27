enum HandChoices {
  Rock,
  Paper,
  Scissors,
  Lizard,
  Spock,
}

const ChoiceRules = {
  [HandChoices.Rock]: [HandChoices.Scissors, HandChoices.Lizard],
  [HandChoices.Paper]: [HandChoices.Rock, HandChoices.Spock],
  [HandChoices.Scissors]: [HandChoices.Paper, HandChoices.Lizard],
  [HandChoices.Lizard]: [HandChoices.Spock, HandChoices.Paper],
  [HandChoices.Spock]: [HandChoices.Scissors, HandChoices.Rock],
};

const ChoiceHandler = (
  choice1: HandChoices,
  choice2: HandChoices
): HandChoices => {
  return ChoiceRules[choice1].includes(choice2) ? choice1 : choice2;
};
const WinnerHandler = (
  player1Choice: HandChoices,
  player2Choice: HandChoices
): String => {
  return ChoiceRules[player1Choice].includes(player2Choice)
    ? "Player1"
    : ChoiceRules[player2Choice].includes(player1Choice)
    ? "Player2"
    : "Tie";
};
