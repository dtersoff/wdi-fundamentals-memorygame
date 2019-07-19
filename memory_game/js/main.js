//the four cards of our game
var cards = ["queen", "queen", "king", "king"];

//empty array that will eventually hold the cards that are in play.
var cardsInPlay = [];

/*variable representing the first card flipped by the user, with the
first item in our cards arrayed stored in it. */

var cardOne = cards[0];

//add the first card to the cardsInPlay array
cardsInPlay.push(cardOne);

//variable for second card flipped, storing third card from cards array
var cardTwo= cards[2];

// and pushed to cardsInPlay
cardsInPlay.push(cardTwo);

//logic check to determine if two cards have been played
if (cardsInPlay.length === 2) {
	/*  logic check to determine if the cards match, and alert the
	player of the result */
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
