# battle-ships

## Implementation Notes
I am writing a battle-ships browser game as a self motivated practice exercise.
My particular goal is to improve my ability to remain object-oriented in javascript, and to practice "tell, don't ask" as an OO value.
As such this implementation focuses specifically on single responsibility,
encapsulation and manipulating control flow with commands, rather than queries. In addition, I am aiming for code that allows for short tests.

As an exercise in discipline, all javascript code is test-driven and tested
with Jasmine.

## Part 1 - user stories
~As a player
So that I can amuse myself
I would like to start a 10x10 game of battleships.~

As a player
So that I can understand what's going on
I would like to be able to see the current state of the game.

~As a player
So that I can prepare for the game
I would like to be able to place a ship in my game and set its size.~

As a player
So that I can lay my ship out properly
I would like to place a ship either horizontally or vertically.

As a player
So that I can have a coherent game
I would like my ship to be constrained to be on the board

~As a player
So that I can play the game
I would like to be able to fire at the board and know whether it's a hit or a miss.~

~As a player
So that I can refine my strategy
I would like to know when I have sunk a ship.~
