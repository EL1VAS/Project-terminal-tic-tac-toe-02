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
  console.log(`${board[0]} || ${board[1]} || ${board[2]}`); // Logs first row
  console.log(">>>>>>>>>>>");
  console.log(`${board[3]} || ${board[4]} || ${board[5]}`); // Logs second row
  console.log("<<<<<<<<<<<");
  console.log(`${board[6]} || ${board[7]} || ${board[8]}`); // Logs third row
}
const testBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
printBoard(testBoard);
const testBoard = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
printBoard(testBoard);
/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {}
