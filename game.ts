import * as readlineSync from 'readline-sync';

import { checkDifferences, substractZeros, getZeros, detectPiece, printBoard, printPossibleBoard } from './board.js';
import { pawnMovement, rookMovement, horseMovement, bishopMovement, queenMovement, kingMovement } from './pieces.js';

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

function askForPos(board: number[][], beforeboard: number[][]): void {
  printBoard(board);
  let value = askQuestionSync('Insert an array from where the piece will move (e.g., [0, 1]): ');
    // beforeboard = board;
  let selectedPos = JSON.parse(value);

  let selectedPiece = board[selectedPos[0]][selectedPos[1]]; // ? Saves the current piece in memory

  if (selectedPiece != 0) {
    board[selectedPos[0]][selectedPos[1]] = 0;
  
    let differences = checkDifferences(board, beforeboard);
  
    let zeros = getZeros(differences, board);
  
    if (zeros.length == 1) {
      let type = detectPiece(zeros[0], beforeboard); // FIXME: The function could recieve the value of the piece directly

      let isWhite = selectedPiece % 2 == 1

      let possibleMovements: number[][];

      switch(type) {
        case "pawn":
          possibleMovements = pawnMovement(board, selectedPos, isWhite);
          break;
        case "rook":
          possibleMovements = rookMovement(board, selectedPos, isWhite);
          break;
        case "horse":
          possibleMovements = horseMovement(board, selectedPos, isWhite);
          break;
        case "bishop":
          possibleMovements = bishopMovement(board, selectedPos, isWhite);
          break;
        case "queen":
          possibleMovements = queenMovement(board, selectedPos, isWhite);
          break;
        case "king":
          possibleMovements = kingMovement(board, selectedPos, isWhite);
          break;
        default:
          possibleMovements = [];
          break;
      }

      if (possibleMovements.length == 0) {
        board[selectedPos[0]][selectedPiece[1]] = selectedPiece;
        selectedPiece = 0;
      } else {
        printPossibleBoard(board, possibleMovements);

        let isValid = false;

          
        checkPosition(board, beforeboard, possibleMovements, isValid, selectedPiece);
      }

      // * switch (type) { movementPawn, etc }
      // * IF !possibleMovements { board[selectedPos[0]][selectedPos[1]] = selectedPiece; selectedPiece = 0; }
      // * Print possible movements with modified printBoard
      // * rl.question("Select pos from possible movements");
      // * if (!possibleMovements.includes(selectedMovement)) rl.question
      // * else { board[selectedMovement[0]][selectedMovement[1]] = selectedPiece; beforeboard = board; }
    }
  }

  askForPos(board, beforeboard);
}

function askQuestionSync(question: string): string {
  return readlineSync.question(question);
}

function checkPosition(board: number[][], beforeboard: number[][], possibleMovements: number[][], isValid: boolean, selectedPiece: number) {
  let pickedMovement = askQuestionSync('Select one of the positions marked with #: ')
  let selectedMovement = JSON.parse(pickedMovement);
  for (const possibleMovement of possibleMovements) {
    if (possibleMovement[0] == selectedMovement[0] && possibleMovement[1] == selectedMovement[1]) isValid = true;
  }
    
  if (isValid) {
    console.log(selectedMovement);
    console.log(selectedPiece);
    board[selectedMovement[0]][selectedMovement[1]] = selectedPiece;
    console.log(board[selectedMovement[0]][selectedMovement[1]])
    beforeboard = board;
  } else {
    checkPosition(board, beforeboard, possibleMovements, isValid, selectedPiece);
  }
}

// Inicia el proceso preguntando al usuario
askForPos(board, beforeboard);
