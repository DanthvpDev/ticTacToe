window.addEventListener('DOMContentLoaded', ()=> {
    const StartGameButton = document.getElementById('startGameButton');
    const SymbolSelectionSection = document.getElementById('symbolSelection');
    const inputPlayerOneName = document.getElementById('playerOneName');
    const inputPlayerTwoName = document.getElementById('playerTwoName');
    const btnPvp = document.getElementById('btnPvp');
    const btnVsComputer = document.getElementById('btnVsComputer');
    const btnCross = document.getElementById('btnCross');
    const btnCircle = document.getElementById('btnCircle');

    let playerOne = new Player('Player1');
    let IsPVP;
    let playerTwo, computer;
    


    StartGameButton.addEventListener('click', ()=> {
        
        if(IsNameInputFilledOut(inputPlayerOneName.value)) playerOne.name = inputPlayerOneName.value;
        if(!IsSymbolSelected(playerOne)) {
            AssigningSymbolRandomly(playerOne);
        }
        //* This validates  if the game mode is Players Vs Player or not to create the player two or the computer
        if(IsPVP) {
            playerTwo = new Player('Player2');
            if(IsNameInputFilledOut(inputPlayerTwoName.value)) playerTwo.name = inputPlayerTwoName.value;
            AssigningSymbolToOpponent(playerOne, playerTwo);
        }
        else {
            computer = new Player('Computer');
            AssigningSymbolToOpponent(playerOne, computer);
        }

        SymbolSelectionSection.classList.toggle('hidden');
        console.log(playerOne, playerTwo);
    })

    btnPvp.addEventListener('click', () => {
        IsPVP = true;
        //*This change the style of the selected element using a class to set the style rules.
        if(!btnPvp.classList.contains('selected')) btnPvp.classList.toggle('selected');

        //* This verifies if the opposite button has the class, if it has it, this toggles the class. 
        if(btnVsComputer.classList.contains('selected')) btnVsComputer.classList.toggle('selected');

        //*This checks if the input for the name of player2 hasn't been displayed, if it isn't, this displays the element.
        if(!inputPlayerTwoName.classList.contains('flex')) ShowingHiddingInputPlayerTwo(inputPlayerTwoName);
    })

    btnVsComputer.addEventListener('click', ()=> {
        IsPVP = false;
        if(btnPvp.classList.contains('selected')) btnPvp.classList.toggle('selected');
        if(!btnVsComputer.classList.contains('selected')) btnVsComputer.classList.toggle('selected');
        if(!inputPlayerTwoName.classList.contains('hidden')) ShowingHiddingInputPlayerTwo(inputPlayerTwoName);
    })

    btnCircle.addEventListener('click', ()=> {
        playerOne.symbol = 'O';
        if(!btnCircle.classList.contains('selected')) btnCircle.classList.toggle('selected');
        if(btnCross.classList.contains('selected')) btnCross.classList.toggle('selected');
    })

    btnCross.addEventListener('click', ()=> {
        playerOne.symbol = 'X';
        if(!btnCross.classList.contains('selected')) btnCross.classList.toggle('selected');
        if(btnCircle.classList.contains('selected')) btnCircle.classList.toggle('selected');
    })

})

