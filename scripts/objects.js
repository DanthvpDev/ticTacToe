class Player {
    symbol = undefined;
    gamesWon = 0;
    constructor(name) {
        this.name = name;
    }
};



function AssigningSymbolRandomly(object) {
    let random = Math.floor(Math.random() * 11);
    (random < 5) ? object.symbol = 'X' : object.symbol = 'O';
}

function AssigningSymbolToOpponent(player1, opponent) {
    (player1.symbol == 'O') ? opponent.symbol = 'X' : opponent.symbol = 'O';
}