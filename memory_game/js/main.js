//the four cards of our game
var cards = ["queen", "queen", "king", "king"];

//empty array that will eventually hold the cards that are in play.
var cardsInPlay = [];

//function to check for matching cards
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

//function for flipping cards
function flipCard(cardId) {
	//display message saying which card was flipped
	console.log("User flipped " + cards[cardId]);

	//push that card to cardsInPlay array
	cardsInPlay.push(cards[cardId]);

	//checks for match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
}
flipCard(0);
flipCard(2);