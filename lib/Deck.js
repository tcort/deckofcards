'use strict';

const _ = require('lodash');
const rng = require('arc4random');

const Card = require('./Card');

class Deck {

    constructor() {

        this.cards = [];
        _.each(Card.suits, (suit) => {
            _.each(Card.ranks, (rank) => {
                this.cards.push(new Card(rank, suit));
            });
        });
        this.dealt = [];

        this.shuffle();
    }

    reset() {
        this.cards = _.union(this.cards, this.dealt);
        this.dealt = [];
        this.shuffle();
    }

    shuffle() {
        let i, j, tmp;

        for (i = this.cards.length - 1; i >= 1; i--) {
            j = rng.arc4random_uniform(i + 1);

            tmp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = tmp;
        }
    }

    draw() {
        const card = this.cards.shift();
        if (card !== undefined) {
            this.dealt.push(card);
        }
        return card;
    }

    toString() {
        return this.cards.join(",");
    }
}

module.exports = Deck;
