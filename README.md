# Labyrinth
Once upon a time, there was a king, who had a beautiful daughter. The princess had a lot of wooer, and a king was struggling whom to choose. Finally an idea came into his mind. The castle had a magical maze, where the rooms can change their positions. There are treasures hidden in the rooms, and whichever wooer collects his treasures first, he wins the princess's hand.


The rooms int maze are symbolized by a 7x7 square grid cells. For each room we know that which wall has a door. If there are two doors in the contact wall of two neighbouring rooms, you can go from one room to another. The even rows and columns in the grid can be slided, the other rooms are fixed throughout the game. By sliding the rooms in the grid, doors and passages open through which players can move in the maze. By cleverly sliding the rooms players try to find their way to the treasures. The first player to find all their treasures and return to the starting square is the winner.



Note: there is a lightblue stripe on the right image and the next two images. It appears "accidentally" because of the extra room. Showing this is not an expectation, in fact it is an ugly solution!

At the beginning of the game we put the rooms in random order and in random direction to the free fields of the game board. There should be one room remaining. During the game we will always use the extra room to slide the rest of the rooms. In the game you have to find up to 24 treasures. These are randomly placed on the board so that only one treasure can be in a room and can not be placed in the corner. For each treasure there is a card. We shuffle these treasure cards and divide them evenly among the players and revealing the top card. Playing pieces are placed in separate corners of the board.


During the game each player has to find his/her revealed treasure card (that can be seen by others). The player tries to get to the room showing the same treasure as on this card. For this the player needs to

move the maze, and after that
move the playing piece.
Moving the maze is done as follows: the player inserts the extra room into the game board where one of the arrows shows the slidable rows and columns, until another room is pushed out of the maze on the opposite side. The only exception: The room cannot be inserted back into the board at the same place where it was pushed out. So you cannot undo the previous player's move. If the room you push out has a playing piece on it, put this piece on the opposite side of the board on the room that was just placed. The treasures always move with the rooms.

Once you have moved the maze, you can move your playing piece. You can occupy any square that you can move your piece to directly, without interruption. You can move your playing piece as far as you like. Or, you can leave your playing piece where it is. There can be more than one playing piece in one room: playing pieces do not hit each other. If you are unable to get to the treasure you are searching for, you can move your playing piece into a position that gives you a good starting point for your next turn. Once you find the treasure you are looking for, reveal your next treasure card. On your next turn, find your way to this treasure on the game board.

Now it’s the next player’s turn. This player inserts the extra room into the game board before moving their playing piece, and so on.

The game is over as soon as a player has found all their treasure cards and returned their playing piece to its starting position. The first player to do this is the winner.


Realizing the game

Start screen
Create a start screen, where the game parameters can be set:

number of players (1-4) -- defaults to 2
number of treasure cards per player (1-(24/number of players)) -- defaults to 2
By pressing a Start button, show the game board.
