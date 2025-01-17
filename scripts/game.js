
//* This change the turn validating if the turn corresponds to crosses (1) or circles (2)
function ChangingTurns(turn) {
    return turn == 1 ? 0 : 1;
}


window.addEventListener('DOMContentLoaded', () => {
    const StartGameButton = document.getElementById('startGameButton');
    const SymbolSelectionSection = document.getElementById('symbolSelection');
    const inputPlayerOneName = document.getElementById('playerOneName');
    const inputPlayerTwoName = document.getElementById('playerTwoName');
    const btnPvp = document.getElementById('btnPvp');
    const btnVsComputer = document.getElementById('btnVsComputer');
    const btnCross = document.getElementById('btnCross');
    const btnCircle = document.getElementById('btnCircle');
    const playerSymbolPicture = document.getElementById('playerSymbolPicture');
    const opponentSymbolPicture = document.getElementById('opponentSymbolPicture');
    const gridItems = document.querySelectorAll('.item-grid');
    const boardRows = document.querySelectorAll('.board-row');


    let playerOne = new Player('Player1');
    let IsPVP;
    let playerTwo, computer;
    let turn;
    let arr = []


    StartGameButton.addEventListener('click', () => {

        //* This randomly assigns the symbol to the one who is having the turn 
        turn = AssigningSymbolRandomly();


        //* It validates if the Input for player name is filled out, if it is, it sets the name for player1
        if (IsNameInputFilledOut(inputPlayerOneName.value)) playerOne.name = inputPlayerOneName.value;

        //* This checks if player1 has not selected a symbol, so, it randomly assings the symbol
        if (!IsSymbolSelected(playerOne)) playerOne.symbol = AssigningSymbolRandomly();


        ShowingScoreSymbolPictures(playerOne, playerSymbolPicture);

        //* This validates  if the game mode is Players Vs Player or not to create the player two or the computer and showing the symbol on the score
        if (IsPVP) {
            playerTwo = new Player('Player2');
            if (IsNameInputFilledOut(inputPlayerTwoName.value)) playerTwo.name = inputPlayerTwoName.value;
            AssigningSymbolToOpponent(playerOne, playerTwo);
            ShowingScoreSymbolPictures(playerTwo, opponentSymbolPicture);
        }
        else {
            computer = new Player('Computer');
            AssigningSymbolToOpponent(playerOne, computer);
            ShowingScoreSymbolPictures(computer, opponentSymbolPicture);
        }

        //* This hides the game settings
        SymbolSelectionSection.classList.toggle('hidden');

    })

    btnPvp.addEventListener('click', () => {
        IsPVP = true;
        //*This change the style of the selected element using a class to set the style rules.
        if (!btnPvp.classList.contains('selected')) btnPvp.classList.toggle('selected');

        //* This verifies if the opposite button has the class, if it has it, this toggles the class. 
        if (btnVsComputer.classList.contains('selected')) btnVsComputer.classList.toggle('selected');

        //*This checks if the input for the name of player2 hasn't been displayed, if it isn't, this displays the element.
        if (!inputPlayerTwoName.classList.contains('flex')) ShowingHiddingInputPlayerTwo(inputPlayerTwoName);
    })

    btnVsComputer.addEventListener('click', () => {
        IsPVP = false;
        if (btnPvp.classList.contains('selected')) btnPvp.classList.toggle('selected');
        if (!btnVsComputer.classList.contains('selected')) btnVsComputer.classList.toggle('selected');
        if (!inputPlayerTwoName.classList.contains('hidden')) ShowingHiddingInputPlayerTwo(inputPlayerTwoName);
    })

    btnCircle.addEventListener('click', () => {
        playerOne.symbol = 0;
        if (!btnCircle.classList.contains('selected')) btnCircle.classList.toggle('selected');
        if (btnCross.classList.contains('selected')) btnCross.classList.toggle('selected');
    })

    btnCross.addEventListener('click', () => {
        playerOne.symbol = 1;
        if (!btnCross.classList.contains('selected')) btnCross.classList.toggle('selected');
        if (btnCircle.classList.contains('selected')) btnCircle.classList.toggle('selected');
    })


    gridItems.forEach(elem => {
        elem.addEventListener('click', (e) => {
            let targetParent = elem.parentNode;

            let pictureElement = document.createElement('picture');
            let imgElement = document.createElement('img');
            imgElement.className = 'w-9/12 h-full'
            pictureElement.className = 'w-full h-full flex justify-center';

            if (!elem.children.length) {
                if (turn == 1) {
                    imgElement.src = '../media/img/Select=Cross.png';
                    elem.name = 1;

                }
                else {
                    imgElement.src = '../media/img/Select=Circle.png';
                    elem.name = 0;
                }
                pictureElement.appendChild(imgElement);

                elem.appendChild(pictureElement);

                turn = ChangingTurns(turn);
            }


            console.log(elem.name)
            console.log(ValidatingWinnerRows(targetParent))

        })
    })

})

