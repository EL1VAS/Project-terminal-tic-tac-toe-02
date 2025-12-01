/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  console.clear(); // Clears the console before each log
  console.log("\n****** TIC TAC TOE GAME******\n");
  for (let row = 0; row < board.length; row++) {
    console.log("   " + board[row].join("||") + "   ");
    if (row < board.length - 1) {
      console.log("=============");
    }
  }
}

const testBoard = [
  ["X", "_", "O"],
  ["O", "_", "X"],
  ["_", "X", "O"],
];
printBoard(testBoard);

const testTwoBoard = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];
printBoard(testTwoBoard);
/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  for (let row = 0; row < board.length; row++) {
    // Where row is the index+1 of our array of arrays
    for (let column = 0; column < board[row].length; column++) {
      // Where column is index+1 of the elements of each array inside the main array
      if (board[row][column] === "_") {
        // Searches by coordinators and find an empty cell
        return false; // So there are still moves to do
      }
    }
  }
  return true; // No more moves
}

const testNotFullBoard = [
  ["_", "_", "O"],
  ["O", "_", "X"],
  ["_", "O", "O"],
];
console.log(checkIfNoMovesLeft(testNotFullBoard));
const testFullBoard = [
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"],
];
console.log(checkIfNoMovesLeft(testFullBoard));
