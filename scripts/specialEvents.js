function ShowingHiddingInputPlayerTwo(input) {
    input.classList.toggle('hidden');
    input.classList.toggle('flex');
}


function ShowingScoreSymbolPictures(player, element) {
    let img = document.createElement('img');
    player.symbol == 1
            ? img.src = `./media/img/Select=Cross.png`
            : img.src = `./media/img/Select=Circle.png`;
    element.appendChild(img);

}

