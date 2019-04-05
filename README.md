# Deck

`Deck` is a basic JavaScript implementation of a deck of 52 cards. An interface is provided to draw and shuffle cards within the deck.

## Installation

Install with NPM: `npm install ultimate-deck`

## Creating & Using a Deck

### Import the Deck

```js
const { Deck } = require('ultimate-deck');
```

### Configure the deck

To create a deck object, instantiate it from the `Deck` constructor:
```js
const myDeck = new Deck();
```

The cards will be initially inserted in order. To randomize the order of the cards, call `.shuffle`:
```js
myDeck.shuffle();
```

### Draw Cards from the Deck

Remove the card from the top of the deck, return it as an object having the keys "rank", "suit", "value" and "stringfy" and add it back at the bottom of the deck:
```js
// Draw a single card
const drawnCard = myDeck.draw();
```

```js
// Get the string representation of the card
drawnCard.stringfy;
```