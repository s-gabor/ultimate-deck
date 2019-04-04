# Deck

[![Build Status](https://github.com/s-gabor/ultimate-deck.git)](https://github.com/s-gabor/ultimate-deck.git)

`Deck` is a basic JavaScript implementation of a deck of 52 cards. An interface is provided to draw and shuffle cards within the deck.

## Installation

Install with NPM: `npm install ultimate-deck`

## Creating & Using a Deck

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

Remove cards from the deck (and return them as an object or array) using any of the draw methods:
```js
// Draw a single card
const drawnCard = myDeck.draw();
```
