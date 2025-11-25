/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/


function validateMove(move, board) {
    const possibleMoves = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3]];
// check if the move is a string 
    if (typeof move !== 'string') {
        console.log('Try again');
        return false;
    }
    // split the move and check format
    const parts = move.split(',');
    if(parts.length !== 2) {
        console.log('Try again');
        return false;
    }
// convert to numbers
    const row = parseInt(parts[0]);
    const col = parseInt(parts[1]);

//check if numbers are valid
    if(isNaN(row) || isNaN(col)) {
        console.log('Try again');
        return false;
    }
// check if move is in possibleMoves
    const isValidPosition = possibleMoves.some(([r,c]) => r === row && c === col);
    if (!isValidPosition) {
        console.log('Try again');
        return false;
    }
// check if the position is empty (convert to 0 based index for array access)
    if (board[row - 1][col -1] !== '_') {
        console.log('Try again');
        return false;
    }
    // Implement this at the end if you have time, otherwise you can help your teammates!
    return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
    // first - validate the move
    if (!validateMove(move, board)) {
        return false;
    }
// if valid, extract row and col 
    const [row, col] = move.split(',').map(Number);
    // update the board (convert to 0 based index)
    board[row -1] [col - 1] = player;
    return true;
}

// tests

let board = [
    ['X', '_', '_'],
    ['_', 'X', '_'],
    ['O', 'O', 'X']
];

// Test valid moves
console.log(makeMove(board, "1,2", 'O')); // true - valid move
console.log(board); // Board updated with O at position (1,2)

// Test invalid moves
console.log(makeMove(board, "1,1", 'X')); // false - position already taken
console.log(makeMove(board, "0,1", 'X')); // false - out of bounds
console.log(makeMove(board, "2-1", 'X')); // false - invalid format
console.log(makeMove(board, "1,4", 'X')); // false - out of bounds