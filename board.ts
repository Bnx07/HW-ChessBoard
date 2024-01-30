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

const getZeros = (differences: number[][], board:number[][]): number[][] => {
  let newDifferences: number[][] = [];
  for (const i of differences) {
    if (board[i[0]][i[1]] == 0) {
      newDifferences.push(i);
    } 
  }
  return newDifferences;
}

const detectPiece = (piece: number): string => {
  let type: string;
  if (piece%2 == 0) piece -= 1;
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
    case 13:
      type = "rook"
      break;
    case 15:
      type = "king"
      break;
    case 17:
      type = "pawn";
      break;
    default: 
      type = "null"
      break;
  }

  return type;
}

function printBoard(board: number[][]): void {
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

function printPossibleBoard(board: number[][], possibleMovements: number[][]): void {
  for (let row = 0; row <= 7; row++) {
    let rowString = "|";
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      let pieceChar = getPieceLetter(piece);

      possibleMovements.forEach((movement) => {
        if (row == movement[0] && col == movement[1]) pieceChar = "#"
      })

      rowString += ` ${pieceChar} |`;
    }
    console.log(('---------------------------------'));
    console.log(rowString);
  }
  console.log(('---------------------------------'));
}

function getPieceLetter(pieceValue: number): string {
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
    case 13: return 'R'; // Rey blanco sin moverse
    case 14: return 'r'; // Rey negro sin moverse
    case 15: return 'K'; // Torre blanca sin moverse
    case 16: return 'k'; // Torre negra sin moverse
    case 17: return 'P'; // Peon blanco tras avanzar doble
    case 18: return 'p'; // Peon negro tras avanzar doble
    default: return ' ';
  }
}

export { checkDifferences, substractZeros, getZeros, detectPiece, printBoard, printPossibleBoard }