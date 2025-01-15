class Player {
    symbol = undefined;
    gamesWon = 0;
    constructor(name) {
        this.name = name;
    }
};



function AssigningSymbolRandomly() {
    let random = Math.floor(Math.random() * 11);
    return (random < 5) ? 1 : 0;
}

function AssigningSymbolToOpponent(player1, opponent) {
    (player1.symbol == 1) ? opponent.symbol = 0 : opponent.symbol = 1;
}