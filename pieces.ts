const pawnMovement = (board: number[][], pawnPos: number[], isWhite: boolean) => {
  let possiblePositions: number[][] = []

  if (isWhite == true) {

    // ? Upwards to the right
    // * IS WORKING
    if (board[pawnPos[0] - 1][pawnPos[1] + 1] != 0 && board[pawnPos[0] - 1][pawnPos[1] + 1] % 2 == 0) {
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1] + 1]);
    }

    // ? Upwards to the left
    // * IS WORKING
    if (board[pawnPos[0] - 1][pawnPos[1] - 1] != 0 && board[pawnPos[0] - 1][pawnPos[1] - 1] % 2 == 0) {
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1] - 1]);
    }

    // ? Upward once
    // * IS WORKING
    if (board[pawnPos[0] - 1][pawnPos[1]] == 0) {
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1]]);
    }

    // ? Upward twice
    if (pawnPos[0] == 6 && board[pawnPos[0] - 1][pawnPos[1]] == 0 && board[pawnPos[0] - 2][pawnPos[1]] == 0) {
      possiblePositions.push([pawnPos[0] - 2, pawnPos[1]]);
    }

    // ? Left (En passsant)
    if (board[pawnPos[0]][pawnPos[1] + 1] == 22) {
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1] + 1]);
    }

    // ? Right (En passant)
    if (board[pawnPos[0]][pawnPos[1] - 1] == 22) {
      possiblePositions.push([pawnPos[0] - 1, pawnPos[1] - 1])
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

    // ? Left (En passsant)
    if (board[pawnPos[0]][pawnPos[1] + 1] == 21) {
      possiblePositions.push([pawnPos[0] + 1, pawnPos[1] + 1]);
    }

    // ? Right (En passant)
    if (board[pawnPos[0]][pawnPos[1] - 1] == 21) {
      possiblePositions.push([pawnPos[0] + 1, pawnPos[1] - 1])
    }
  }

  console.log("POSSIBLE POSITIONS: ", possiblePositions);

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

  console.log("POSSIBLE POSITIONS: ", possiblePositions);

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

  console.log("POSSIBLE POSITIONS: ", possiblePositions);

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

  console.log("POSSIBLE POSITIONS: ", possiblePositions);

  return possiblePositions;
};

const queenMovement = (board: number[][], queenPos: number[], isWhite: boolean): number[][] => {
  let rookPossible = rookMovement(board, queenPos, isWhite);
  let bishopPossible = bishopMovement(board, queenPos, isWhite);
  
  const possiblePositions: number[][] = rookPossible.concat(bishopPossible);

  console.log("POSSIBLE POSITIONS: ", possiblePositions);

  return possiblePositions;
}

const kingMovement = (board: number[][], kingPos: number[], isWhite: boolean, canCastle: boolean): number[][] => {
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

  if (canCastle) {
    if (board[kingPos[0]][0] == 23 || board[kingPos[0]][0] == 24) { // ? Left corner
      for (var i = 1; i++; i < 4) {
        if (board[kingPos[0]][4 - i] != 0) break;
        else {
          if (i == 3) possiblePositions.push([kingPos[0], kingPos[1] - 2]);
          console.log(`Square [${kingPos[0]}, ${4 - i}]: ${board[kingPos[0]][4 - i]} - VALOR DE i: ${i}`);
        }
      }
    }

    if (board[kingPos[0]][7] == 23 || board[kingPos[0]][7] == 24) { // ? Left corner
      for (var i = 1; i++; i < 3) {
        if (board[kingPos[0]][4 + i] != 0) break;
        else {
          if (i == 2) possiblePositions.push([kingPos[0], kingPos[1] + 2]);
          console.log(`Square [${kingPos[0]}, ${4 + i}]: ${board[kingPos[0]][4 - i]} - VALOR DE i: ${i}`);
        }
      }
    }
  }

  console.log("POSSIBLE POSITIONS: ", possiblePositions);

  return possiblePositions;
};

export {
  pawnMovement,
  rookMovement,
  horseMovement,
  bishopMovement,
  queenMovement,
  kingMovement 
}