'use strict';

const _ = require('lodash');
const expect = require('expect.js');

const Deck = require('../lib/Deck');
const Card = require('../lib/Card');

describe('Deck', function () {

    it('should be a function (constructor)', function () {
        expect(Deck).to.be.a('function');
    });

    describe('cards', function () {
        it('should be defined', function () {
            const deck = new Deck();
            expect(deck).to.have.property('cards');
        });

        it('should be an array', function () {
            const deck = new Deck();
            expect(deck.cards).to.be.an('array');
        });

        it('should be of length 52', function () {
            const deck = new Deck();
            expect(deck.cards).to.have.length(52);
        });

        it('should contain instances of Card', function () {
            const deck = new Deck();
            for (let i = 0; i < deck.cards.length; i++) {
                expect(deck.cards[i]).to.be.a(Card);
            }
        });
    });

    describe('shuffle()', function() {
        it('should be defined', function () {
            const deck = new Deck();
            expect(deck).to.have.property('shuffle');
        });

        it('should be a function', function () {
            const deck = new Deck();
            expect(deck.shuffle).to.be.a('function');
        });

        it('should shuffle the deck', function () {
            const deck = new Deck();
            const cardsBefore = [];
            const cardsAfter = [];
            for (let i = 0; i < deck.cards.length; i++) {
                cardsBefore.push(deck.cards[i]);
            }
            deck.shuffle();
            for (let j = 0; j < deck.cards.length; j++) {
                cardsAfter.push(deck.cards[j]);
            }
            expect(cardsBefore.toString()).not.to.be(cardsAfter.toString());
        });
    });

    describe('draw()', function() {
        it('should be defined', function () {
            const deck = new Deck();
            expect(deck).to.have.property('draw');
        });

        it('should be a function', function () {
            const deck = new Deck();
            expect(deck.draw).to.be.a('function');
        });

        it('should return a Card', function () {
            const deck = new Deck();
            expect(deck.draw()).to.be.a(Card);
        });

        it('should return 52 cards', function () {
            const deck = new Deck();
            const cards = {};
            for (let i = 0; i < 52; i++) {
                const card = deck.draw();
                expect(card).to.be.a(Card);
                expect(cards[card.toString()]).to.be(undefined);
                cards[card.toString()] = 1;
            }
            expect(_.keys(cards)).to.have.length(52);
        });

        it('should return 52 cards and the undefined on subsequent draws', function () {
            const deck = new Deck();
            for (let i = 0; i < 52; i++) {
                expect(deck.draw()).to.be.a(Card);
            }
            for (let j = 0; j < 52; j++) {
                expect(deck.draw()).to.be(undefined);
            }
        });
    });

    describe('reset()', function () {
        it('should be a function', function () {
            const deck = new Deck();
            expect(deck.reset).to.be.a('function');
        });

        it('should return 52 cards to the deck', function () {
            const deck = new Deck();
            for (let i = 0; i < 52; i++) {
                expect(deck.draw()).to.be.a(Card);
            }
            for (let j = 0; j < 52; j++) {
                expect(deck.draw()).to.be(undefined);
            }
            deck.reset();
            for (let i = 0; i < 52; i++) {
                expect(deck.draw()).to.be.a(Card);
            }
            for (let j = 0; j < 52; j++) {
                expect(deck.draw()).to.be(undefined);
            }
        });
    });

    describe('toString()', function () {

        it('should be a function', function () {
            const deck = new Deck();
            expect(deck.toString).to.be.a('function');
        });

        it('should return a string', function () {
            const deck = new Deck();
            expect(deck.toString()).to.be.a('string');
        });

        it('should return a string of length 2*52+51', function () {
            const deck = new Deck();
            expect(deck.toString()).to.have.length(2*52+51);
        });
    });
});
