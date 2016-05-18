# deckofcards

A simple implementation of a deck of playing cards.

## API

### Card

Cards are a combination of a rank (`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`,
`T` (Ten), `J` (Jack), `Q` (Queen), `K` (King), `A` (Ace)) and a suit
(`S` (Spades), `C` (Clubs), `H` (Hearts), `D` (Diamonds)).

#### constructor(rank, suit)

Accepts a rank (e.g. `4`) and a suit (e.g. `C`). Will throw on invalid input.

#### constructor(rankAndSuit)

Accepts a rank and a suit string (e.g. `4C`). Will throw on invalid input.

#### constructor(Card)

Copy constructor. Accepts a Card. Will throw on invalid input.

#### static parse(s)

Parses a card string (e.g. `4C`) and returns a new `Card`.

#### static stringify(c)

Returns a string representation of the card (e.g. `KH`).

#### toString()

Returns a string representation of the card (e.g. `KH`).

#### valueOf()

Returns a string representation of the card (e.g. `KH`).

#### inspect()

Returns a string representation of the card (e.g. `KH`).

#### ranks[]

An array of valid ranks.

#### suits[]

An array of valid suits.

### Deck

A Deck is just a set of 52 unique cards made by combining all legal suits and
ranks.

#### constructor()

Initializes a new shuffled deck of cards.

#### shuffle()

Randomizes the order of the cards.

#### draw()

Returns the next card from the deck.

#### reset()

Puts the dealt cards back in the deck and performs a shuffle.

#### toString()

Returns a string representation of the deck.

## Testing

    npm test

## License

See [LICENSE.md](https://github.com/tcort/deckofcards/blob/master/LICENSE.md)

