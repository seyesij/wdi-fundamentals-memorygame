var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  	alert("You found a match!");
	  } else {
	  	alert("Sorry, try again.");
	  }
	};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log(cardId);

	cardsInPlay.push(cards[cardId].card);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];	 
	}
  };

  var createBoard = function () {
  	for (var i = 0; i < cards.length; i++) {
  		var cardElement = document.createElement('img');

  		cardElement.setAttribute('src', 'images/back.png');

  		cardElement.setAttribute('data-id', i);

  		cardElement.addEventListener('click', flipCard);

  		document.getElementById('game-board').appendChild(cardElement);
  	}
  }

  createBoard();