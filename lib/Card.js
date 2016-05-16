'use strict';

const _ = require('lodash');

class Card {
    constructor(rank, suit) {
        if (!_.isString(rank) || rank.length !== 1) {
            throw new Error('Invalid Rank');
        }
        rank = rank.toUpperCase();
        if (!_.includes(Card.ranks, rank)) {
            throw new Error('Invalid Rank');
        }

        if (!_.isString(suit) || rank.length !== 1) {
            throw new Error('Invalid Suit');
        }
        suit = suit.toUpperCase();
        if (!_.includes(Card.suits, suit)) {
            throw new Error('Invalid Suit');
        }

        this.rank = rank;
        this.suit = suit;
    }

    equals(c) {
        if (!(c instanceof Card)) {
            return false;
        }
        return (this.rank === c.rank && this.suit === c.suit);
    }

    toString() {
        return this.rank + this.suit;
    }

    static parse(s) {

        if (!_.isString(s)) {
            throw new Error('Invalid Card String');
        }

        s = s.replace(/[\s,]/g, ''); // strip any whitespace, commas, etc.
        if (s.length !== 2) {
            throw new Error('Invalid Card String');
        }

        return new Card(s[0].toUpperCase(), s[1].toLowerCase());
    }
}

Card.ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T', // 10
    'J', // jack
    'Q', // queen
    'K', // king
    'A'  // ace
];

Card.suits = [
    'S', // spades
    'H', // hearts
    'D', // diamonds
    'C'  // clubs
];

module.exports = Card;
