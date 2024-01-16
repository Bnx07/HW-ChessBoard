const filterPositions = (positions: number[][]): number[][] => {
  let newPositions: number[][] = [];

  positions.forEach(position => {
    if (!(position[0] > 7 || position[0] < 0 || position[1] > 7 || position[1] < 0)) {
      newPositions.push(position);
    }
  })

  return newPositions
}

const pawnMovement = (board: number[][], pawnPos: number[], isWhite: boolean): number[][] => {
  let possiblePositions: number[][] = [];

  const directions = isWhite ? [[1, 1], [1, -1], [1, 0], [2, 0]] : [[-1, 1], [-1, -1], [-1, 0], [-2, 0]];

  for (const [rowInc, colInc] of directions) {
    const newRow = pawnPos[0] + rowInc;
    const newCol = pawnPos[1] + colInc;

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