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

//function to set up game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement;
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
}

//function to check for matching cards
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

//function for flipping cards
function flipCard() {
	//get data-id from cardElement and store it
	var cardId = this.getAttribute('data-id');
	//display message saying which card was flipped
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//push that card to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);

	//'flips' card by changing the image source
	this.setAttribute('src', cards[cardId].cardImage);

	//checks for match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
}

var resetBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement;
		cardElement = document.getElementsByTagName('img')[i]
		cardElement.setAttribute('src', "images/back.png");
	};
	while (cardsInPlay.length > 0) {
		cardsInPlay.pop();
	};
}

var resetButton = document.querySelector('button');
resetButton.addEventListener('click',resetBoard);
createBoard();