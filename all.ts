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

let modifications = substractZeros(checkDifferences(board, beforeboard), board);

modifications.forEach(element => {
  detectPiece(element, board);
})

const pawnMovement = (board: number[][], pawnPos: number[], isWhite: boolean) => { // ! THEORETICALLY IS OK
  let possiblePositions: number[][] = []

  if (isWhite == true) {

    // ? Upwards to the right
    // * IS WORKING
    if (board[pawnPos[0] - 1][pawnPos[1] + 1] != 0 && board[pawnPos[0] - 1][pawnPos[1] + 1] % 2 == 0) {
      console.log("Comer a la derecha");
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1] + 1]);
    }

    // ? Upwards to the left
    // * IS WORKING
    if (board[pawnPos[0] - 1][pawnPos[1] - 1] != 0 && board[pawnPos[0] - 1][pawnPos[1] - 1] % 2 == 0) {
      console.log("Comer a la izquierda");
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1] - 1]);
    }

    // ? Upward once
    // * IS WORKING
    if (board[pawnPos[0] - 1][pawnPos[1]] == 0) {
      console.log("Avanzar");
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1]]);
    }

    // ? Upward twice
    if (pawnPos[0] == 6 && board[pawnPos[0] - 1][pawnPos[1]] == 0 && board[pawnPos[0] - 2][pawnPos[1]] == 0) {
      possiblePositions.push([pawnPos[0] - 2, pawnPos[1]]);
    }
  } else {

    // ? Downward to the right
    if (board[pawnPos[0] + 1][pawnPos[1] + 1] != 0 && board[pawnPos[0] + 1][pawnPos[1] + 1] % 2 == 1) {
      possiblePositions.push([pawnPos[0] + 1, pawnPos[1] + 1]);
    }

    // ? Downward to the left
    if (board[pawnPos[0] + 1][pawnPos[1] - 1] != 0 && board[pawnPos[0] + 1][pawnPos[1] - 1] % 2 == 1) {
      possiblePositions.push([pawnPos[0] + 1, pawnPos[1] - 1]);
    }

    // ? Downward once
    if (board[pawnPos[0] + 1][pawnPos[1]] == 0) {
      possiblePositions.push([pawnPos[0] + 1, pawnPos[1]]);
    }

    // ? Downward twice
    if (pawnPos[0] == 1 && board[pawnPos[0] + 1][pawnPos[1]] == 0 && board[pawnPos[0] + 2][pawnPos[1]] == 0) {
      possiblePositions.push([pawnPos[0] + 2, pawnPos[1]]);
    }
  }

  console.log("POSIBLES JUGADAS: ", possiblePositions);

  return possiblePositions;
}

const rookMovement = (board: number[][], rookPos: number[], isWhite: boolean): number[][] => {
  const possiblePositions: number[][] = [];

  const directions = [
    [0, 1], [0, -1], [1, 0], [-1, 0]
  ];

  for (const [rowInc, colInc] of directions) {
    for (let i = 1; i <= 7; i++) {
      const newRow = rookPos[0] + i * rowInc;
      const newCol = rookPos[1] + i * colInc;

      if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) {
        break;
      }

      const targetPiece = board[newRow][newCol];
      const isTargetWhite = targetPiece % 2 === 0;

      if (targetPiece === 0) {
        possiblePositions.push([newRow, newCol]);
      } else if ((isWhite && isTargetWhite) || (!isWhite && !isTargetWhite)) {
        possiblePositions.push([newRow, newCol]);
        break;
      } else {
        break;
      }
    }
  }

  return possiblePositions;
};

const horseMovement = (board: number[][], horsePos: number[], isWhite: boolean): number[][] => {
  const possiblePositions: number[][] = [];

  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [-1, 2], [1, -2], [-1, -2],
  ];

  for (const [rowInc, colInc] of directions) {
    const newRow = horsePos[0] + rowInc;
    const newCol = horsePos[1] + colInc;

    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];
      const isTargetWhite = targetPiece % 2 === 0;

      if ((isWhite && isTargetWhite) || (!isWhite && !isTargetWhite) || targetPiece === 0) {
        possiblePositions.push([newRow, newCol]);
      }
    }
  }

  return possiblePositions;
}

const bishopMovement = (board: number[][], bishopPos: number[], isWhite: boolean): number[][] => {
  const possiblePositions: number[][] = [];

  const directions = [
    [1, 1], [1, -1], [-1, -1], [-1, 1]
  ];

  for (const [rowInc, colInc] of directions) {
    for (let i = 1; i <= 7; i++) {
      const newRow = bishopPos[0] + i * rowInc;
      const newCol = bishopPos[1] + i * colInc;

      if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) {
        break;
      }

      const targetPiece = board[newRow][newCol];
      const isTargetWhite = targetPiece % 2 === 0;

      if (targetPiece === 0) {
        possiblePositions.push([newRow, newCol]);
      } else if ((isWhite && isTargetWhite) || (!isWhite && !isTargetWhite)) {
        possiblePositions.push([newRow, newCol]);
        break;
      } else {
        break;
      }
    }
  }

  return possiblePositions;
};

const queenMovement = (board: number[][], queenPos: number[], isWhite: boolean): number[][] => {
  let rookPossible = rookMovement(board, queenPos, isWhite);
  let bishopPossible = bishopMovement(board, queenPos, isWhite);
  
  const possiblePositions: number[][] = rookPossible.concat(bishopPossible);

  return possiblePositions;
}

const kingMovement = (board: number[][], kingPos: number[], isWhite: boolean): number[][] => {
  const possiblePositions: number[][] = [];
  const directions = [
    [1, 0], [1, 1], [0, 1], [-1, 0],
    [-1, -1], [0, -1], [-1, 1], [1, -1],
  ];

  for (const [rowInc, colInc] of directions) {
    const newRow = kingPos[0] + rowInc;
    const newCol = kingPos[1] + colInc;

    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];
      const isTargetWhite = targetPiece % 2 === 0;

      if ((isWhite && isTargetWhite) || (!isWhite && !isTargetWhite) || targetPiece === 0) {
        possiblePositions.push([newRow, newCol]);
      }
    }
  }

  return possiblePositions;
};