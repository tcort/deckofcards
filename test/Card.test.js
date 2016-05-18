'use strict';

const expect = require('expect.js');

const Card = require('../lib/Card');

describe('Card', function () {

    describe('constructor()', function () {

        it('should be a function (constructor)', function () {
            expect(Card).to.be.a('function');
        });

        it('should throw with an invalid rank', function () {
            expect(function () { const card = new Card('Joker','c'); }).to.throwError();
            expect(function () { const card = new Card('X','c'); }).to.throwError();
        });

        it('should throw with an invalid suit', function () {
            expect(function () { const card = new Card('A','base'); }).to.throwError();
            expect(function () { const card = new Card('A','X'); }).to.throwError();
            expect(function () { const card = new Card('A', null); }).to.throwError();
        });

        it('should accept (numericRank, suit)', function () {
            const card = new Card(4, 'C');
            expect(card.rank).to.be('4');
            expect(card.suit).to.be('C');
        });

        it('should accept (rank, suit)', function () {
            const card = new Card('4', 'C');
            expect(card.rank).to.be('4');
            expect(card.suit).to.be('C');
        });

        it('should accept (rankAndSuit)', function () {
            const card = new Card('4C');
            expect(card.rank).to.be('4');
            expect(card.suit).to.be('C');
        });

        it('should accept (Card)', function () {
            const orig = new Card('4', 'C');
            const card = new Card(orig);
            expect(card.rank).to.be('4');
            expect(card.suit).to.be('C');
        });
    });

    describe('toString()', function () {

        it('should be a function', function () {
            const card = new Card('A', 'C');
            expect(card.toString).to.be.a('function');
        });

        it('should return a string', function () {
            const card = new Card('A', 'D');
            expect(card.toString()).to.be.a('string');
        });

        it('should return a string of length 2', function () {
            const card = new Card('A', 'S');
            expect(card.toString()).to.have.length(2);
        });

        it('should return a string with the rank of the card', function () {
            const card = new Card('A', 'C');
            expect(card.toString()).to.contain('A');
        });

        it('should return a string with the suit of the card', function () {
            const card = new Card('A', 'D');
            expect(card.toString()).to.contain('D');
        });

        it('should return a string with the rank followed by the suit', function () {
            const card = new Card('A', 'D');
            const s = card.toString();
            expect(s[0]).to.contain('A');
            expect(s[1]).to.contain('D');
        });

    });

    describe('valueOf()', function () {

        it('should be a function', function () {
            const card = new Card('A', 'C');
            expect(card.valueOf).to.be.a('function');
        });

        it('should return a string', function () {
            const card = new Card('A', 'D');
            expect(card.valueOf()).to.be.a('string');
        });

        it('should return a string of length 2', function () {
            const card = new Card('A', 'S');
            expect(card.valueOf()).to.have.length(2);
        });

        it('should return a string with the rank of the card', function () {
            const card = new Card('A', 'C');
            expect(card.valueOf()).to.contain('A');
        });

        it('should return a string with the suit of the card', function () {
            const card = new Card('A', 'D');
            expect(card.valueOf()).to.contain('D');
        });

        it('should return a string with the rank followed by the suit', function () {
            const card = new Card('A', 'D');
            const s = card.valueOf();
            expect(s[0]).to.contain('A');
            expect(s[1]).to.contain('D');
        });

    });

    describe('inspect()', function () {

        it('should be a function', function () {
            const card = new Card('A', 'C');
            expect(card.inspect).to.be.a('function');
        });

        it('should return a string', function () {
            const card = new Card('A', 'D');
            expect(card.inspect()).to.be.a('string');
        });

        it('should return a string of length 2', function () {
            const card = new Card('A', 'S');
            expect(card.inspect()).to.have.length(2);
        });

        it('should return a string with the rank of the card', function () {
            const card = new Card('A', 'C');
            expect(card.inspect()).to.contain('A');
        });

        it('should return a string with the suit of the card', function () {
            const card = new Card('A', 'D');
            expect(card.inspect()).to.contain('D');
        });

        it('should return a string with the rank followed by the suit', function () {
            const card = new Card('A', 'D');
            const s = card.inspect();
            expect(s[0]).to.contain('A');
            expect(s[1]).to.contain('D');
        });

    });

    describe('stringify()', function () {

        it('should be a function', function () {
            expect(Card.stringify).to.be.a('function');
        });

        it('should return a string', function () {
            const card = new Card('A', 'D');
            expect(Card.stringify(card)).to.be.a('string');
        });

        it('should return a string of length 2', function () {
            const card = new Card('A', 'S');
            expect(Card.stringify(card)).to.have.length(2);
        });

        it('should return a string with the rank of the card', function () {
            const card = new Card('A', 'C');
            expect(Card.stringify(card)).to.contain('A');
        });

        it('should return a string with the suit of the card', function () {
            const card = new Card('A', 'D');
            expect(Card.stringify(card)).to.contain('D');
        });

        it('should return a string with the rank followed by the suit', function () {
            const card = new Card('A', 'D');
            const s = Card.stringify(card);
            expect(s[0]).to.contain('A');
            expect(s[1]).to.contain('D');
        });

    });

    describe('parse()', function () {

        it('should be a function', function () {
            expect(Card.parse).to.be.a('function');
        });

        it('should return a Card', function () {
            expect(Card.parse("Kc")).to.be.a(Card);
        });

        it('should parse the card correctly', function () {
            const card = Card.parse("Kh");
            expect(card.rank).to.be('K');
            expect(card.suit).to.be('H');
        });

        it('should throw on non-String input', function () {
            expect(function () { Card.parse(null); }).to.throwError();
            expect(function () { Card.parse(42); }).to.throwError();
        });

        it('should throw on Strings with length !== 2', function () {
            expect(function () { Card.parse("2"); }).to.throwError();
            expect(function () { Card.parse("Ad Kh Qc Jd Tc"); }).to.throwError();
            expect(function () { Card.parse("Ads"); }).to.throwError();
            expect(function () { Card.parse("A"); }).to.throwError();
        });
    });

    describe('ranks[]', function () {

        it('should be an array', function () {
            expect(Card.ranks).to.be.an('array');
        });

        it('should have 13 ranks', function () {
            expect(Card.ranks.length).to.be(13);
        });

        it('should have a rank 2', function () {
            expect(Card.ranks).to.contain('2');
        });

        it('should have a rank 3', function () {
            expect(Card.ranks).to.contain('3');
        });

        it('should have a rank 4', function () {
            expect(Card.ranks).to.contain('4');
        });

        it('should have a rank 5', function () {
            expect(Card.ranks).to.contain('5');
        });

        it('should have a rank 6', function () {
            expect(Card.ranks).to.contain('6');
        });

        it('should have a rank 7', function () {
            expect(Card.ranks).to.contain('7');
        });

        it('should have a rank 8', function () {
            expect(Card.ranks).to.contain('8');
        });

        it('should have a rank 9', function () {
            expect(Card.ranks).to.contain('9');
        });

        it('should have a rank T (ten)', function () {
            expect(Card.ranks).to.contain('T');
        });

        it('should have a rank J (jack)', function () {
            expect(Card.ranks).to.contain('J');
        });

        it('should have a rank Q (queen)', function () {
            expect(Card.ranks).to.contain('Q');
        });

        it('should have a rank K (king)', function () {
            expect(Card.ranks).to.contain('K');
        });

        it('should have a rank A (ace)', function () {
            expect(Card.ranks).to.contain('A');
        });

    });

    describe('suits[]', function () {

        it('should be an array', function () {
            expect(Card.suits).to.be.an('array');
        });

        it('should have 4 suits', function () {
            expect(Card.suits.length).to.be(4);
        });

        it('should have a suit S (spades)', function () {
            expect(Card.suits).to.contain('S');
        });

        it('should have a suit C (clubs)', function () {
            expect(Card.suits).to.contain('C');
        });

        it('should have a suit H (hearts)', function () {
            expect(Card.suits).to.contain('H');
        });

        it('should have a suit D (diamonds)', function () {
            expect(Card.suits).to.contain('D');
        });
    });

});
