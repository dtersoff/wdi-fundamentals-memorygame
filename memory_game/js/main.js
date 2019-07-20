//the four cards of our game
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//empty array that will eventually hold the cards that are in play.
var cardsInPlay = [];

//function to check for matching cards
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

//function for flipping cards
function flipCard(cardId) {
	//display message saying which card was flipped
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//push that card to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);

	//checks for match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
}
flipCard(0);
flipCard(2);