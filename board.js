function getBoard(pieces) {
    let squares = document.querySelectorAll('td');
    console.log(squares.length);
    
    let board = [[],[],[],[],[],[],[],[]];
    
    let row = 0;
    for (const element of squares) {
        if (board[row].length == 8) {
            row += 1;
        }
        
        // ? First square is white, so I check for odd squares to make them dark
        if ((row + board[row].length) % 2) {
            board[row].push([element, 0, "pieceId"]);
            element.classList.add('dark');
        } else {
            board[row].push([element, 1, "pieceId"]);
        }
    
        // ? Data is square, color, pieceId (Used for finding the piece later)
    }
    
    console.log(board)
    return board;
}

getBoard();