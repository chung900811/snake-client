# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Getting Started

play.js
Establishes connection to the server.

input.js
Handles all the logic related to setting up input stream and handling user input.

client.js
Establishes connection to the server- assumes localhost. Prints Connected to server... 

Key	Command:
w 	sends move up command,
a 	sends move left command,
s   sends move down command,
d  	sends move right command,
q   sends canned message 'Hello!'.

Sets the name for snake; in this case 'TH' is the desired name.
