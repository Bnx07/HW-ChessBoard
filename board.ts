// ! ODD = WHITE
// ! EVEN = BLACK 
// * pawn = 1     && rook = 3     && knight = 5 
// * bishop = 7   && king = 9     && queen = 11
// ? Black pieces have +1 value

// TODO: THERE IS NO CASTLING
// TODO: THERE IS NO EN PASSANT
// TODO: THERE IS NO CORONATION
// TODO: THERE IS NO CHECK

let beforeboard: number[][] = [
  [4, 6, 8, 10, 12, 8, 6, 4],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [3, 5, 7, 9, 11, 7, 5, 3]
];

let board: number[][] = [
  [4, 6, 8, 10, 12, 8, 6, 4],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [3, 0, 7, 9, 11, 7, 5, 3]
];

const checkDifferences = (board: number[][], beforeboard: number[][]): number[][] => {
  let differences: number[][] = [];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (beforeboard[i][j] != board[i][j]){
        differences.push([i, j]);
      }
    }
  }
  return differences;
}

const substractZeros = (differences: number[][], board: number[][]): number[][] => {
  let newDifferences: number[][] = [];
  for (const i of differences) {
    if (board[i[0]][i[1]] != 0) {
      newDifferences.push(i);
    } 
  }
  return newDifferences;
}

const detectPiece = (pos: number[], board: number[][]) => {
  let piece: number = board[pos[0]][pos[1]];
  let type: string;
  console.log(piece)
  if (piece%2 == 0) piece -= 1;
  console.log(piece)
  switch (piece) {
    case 1:
      type = "pawn";
      break;
    case 3:
      type = "rook";
      break;
    case 5:
      type = "knight";
      break;
    case 7:
      type = "bishop";
      break;
    case 9:
      type = "king";
      break;
    case 11:
      type = "queen";
      break;
    default: 
      type = "null"
      break;
  }
  console.log(type)

  return type;
}

function printBoard(board) {
  for (let row = 0; row <= 7; row++) {
    let rowString = "|";
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      const pieceChar = getPieceLetter(piece);
      rowString += ` ${pieceChar} |`;
    }
    console.log(('---------------------------------'));
    console.log(rowString);
  }
  console.log(('---------------------------------'));
}

// Función para obtener la letra de la pieza según su valor numérico
function getPieceLetter(pieceValue) {
  switch (pieceValue) {
    case 1: return 'P'; // Peón blanco
    case 2: return 'p'; // Peón negro
    case 3: return 'R'; // Torre blanca
    case 4: return 'r'; // Torre negra
    case 5: return 'N'; // Caballo blanco
    case 6: return 'n'; // Caballo negro
    case 7: return 'B'; // Alfil blanco
    case 8: return 'b'; // Alfil negro
    case 9: return 'K'; // Rey blanco
    case 10: return 'k'; // Rey negro
    case 11: return 'Q'; // Reina blanca
    case 12: return 'q'; // Reina negra
    default: return ' ';
  }
}

let modifications = substractZeros(checkDifferences(board, beforeboard), board);

modifications.forEach(element => {
  detectPiece(element, board);
})

printBoard(board);