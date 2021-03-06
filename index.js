class Deck {
    constructor() {
        this._cards = []
        this._new();
    }

    _new() {
        const suits = ['Hearts', 'Dimonds', 'Clubs', 'Spades'];
        const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
        for(let [index, rank] of ranks.entries()) {
            for(let suit of suits) {
                this._cards.push({rank: rank, suit: suit, value: values[index], stringfy: rank + ' of ' + suit});
            }
        }
    }

    draw() {
        const drawnCard = this._cards.pop(); // remove the card from top the of the deck
        this._cards.unshift(drawnCard); // add the card at the bottom of the deck
        return drawnCard;
    }

    shuffle() {
        for(let i = 0; i < this._cards.length; i++) {
            const randomPosition = Math.floor(Math.random() * this._cards.length);
            // swap _cards from position i to randomPosition
            [this._cards[i], this._cards[randomPosition]] = [this._cards[randomPosition], this._cards[i]];
        }
    }
}

module.exports.Deck = Deck;
