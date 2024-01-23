import * as readline from 'readline';

import {checkDifferences, substractZeros, getZeros, detectPiece, printBoard} from './board.js';

const rl = readline.createInterface({
  // @ts-ignore
  input: process.stdin,
  // @ts-ignore
  output: process.stdout
});

function movePiece(board, source, target) { // ? ROW COL
  const sourcePiece = board[source[0]][source[1]];
  
  // Mueve el valor de la posición de entrada a la posición de salida
  board[target[0]][target[1]] = sourcePiece;
  board[source[0]][source[1]] = 0;
}

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
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [3, 5, 7, 9, 11, 7, 5, 3]
];

let selectedPiece: number = 0;

function askForPos(board: number[][], beforeboard: number[][]) {
  printBoard(board);
  rl.question('Insert an array from where the piece will move (e.g., [0, 1]): ', (value) => {
    // beforeboard = board;
    let selectedPos = JSON.parse(value);

    let selectedPiece = board[selectedPos[0]][selectedPos[1]]; // ? Saves the current piece in memory

    if (selectedPiece != 0) {
      board[selectedPos[0]][selectedPos[1]] = 0;
  
      let differences = checkDifferences(board, beforeboard);
  
      let zeros = getZeros(differences, board);
  
      if (zeros.length = 1) {
        let type = detectPiece(zeros[0], beforeboard);
  
        // * switch (type) { movementPawn, etc }
        // * IF !possibleMovements { board[selectedPos[0]][selectedPos[1]] = selectedPiece; selectedPiece = 0; }
        // * Print possible movements with modified printBoard
        // * rl.question("Select pos from possible movements");
        // * if (!possibleMovements.includes(selectedMovement)) rl.question
        // * else { board[selectedMovement[0]][selectedMovement[1]] = selectedPiece; beforeboard = board; }
      }
    }

    askForPos(board, beforeboard);
  });
}

// Inicia el proceso preguntando al usuario
askForPos(board, beforeboard);
