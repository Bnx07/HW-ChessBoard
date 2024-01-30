import * as readlineSync from 'readline-sync';

import { checkDifferences, substractZeros, getZeros, detectPiece, printBoard, printPossibleBoard } from './board.js';
import { pawnMovement, rookMovement, horseMovement, bishopMovement, queenMovement, kingMovement } from './pieces.js';

// ! ODD = WHITE
// ! EVEN = BLACK 
// * pawn = 1     && rook = 3     && knight = 5 
// * bishop = 7   && king = 9     && queen = 11
// * rookNoMove = 13 && kingNoMove = 15
// * Advanced Pawn = 17
// ? Black pieces have +1 value

// TODO: THERE IS NO CASTLING
// ! THERE IS CASTLING DETECTION BUT THERE IS NO CASTLING ITSELF
// TODO: THERE IS NO EN PASSANT
// ! THERE IS EN PASSANT DETECTION BUT THERE IS NO STATE CHANGING
// TODO: THERE IS NO CORONATION
// * Should be write 0 for selecting the option OR write 1 for changing
// TODO: UPDATE PAWN VALUE TO 17 OR 18 AFTER MOVING TWICE 
// TODO: UPDATE ROOKS AND KING VALUES AFTER FIRST MOVEMENT
// TODO: RETURN PAWN VALUE TO DEFAULT AFTER A TURN

// * In order of implementing castling, rooks and kings will have a special state when havent moved, if they have the value, they can see for coronating
// * In order of implementing en passant, pawns will keep a special state after moving twice. After the next movement, the special pawns must return to their default value

let beforeboard: number[][] = [
  [14, 6, 8, 12, 16, 8, 6, 14],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [13, 5, 7, 11, 15, 7, 5, 13]
];

let board: number[][] = [
  [14, 6, 8, 12, 16, 8, 6, 14],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [13, 5, 7, 11, 15, 7, 5, 13]
];

function askForPos(board: number[][], beforeboard: number[][]): void {
  printBoard(board);
  let value = askQuestionSync('Insert an array from where the piece will move (e.g., [0, 1]): ');
    // beforeboard = board;
  let selectedPos: number[] = JSON.parse(value);
  console.log("Selected position: ", selectedPos);

  let selectedPiece: number = board[selectedPos[0]][selectedPos[1]]; // ? Saves the current piece in memory
  console.log("Selected piece: ", selectedPiece);

  if (selectedPiece != 0) {
    board[selectedPos[0]][selectedPos[1]] = 0;
    
    let differences = checkDifferences(board, beforeboard);
    
    let zeros = getZeros(differences, board);
  
    if (zeros.length == 1) {
      let type = detectPiece(selectedPiece);

      let isWhite = selectedPiece % 2 == 1
      console.log("Is white: ", isWhite);

      let possibleMovements: number[][];
      
      console.log("Piece value:", type);

      switch(type) {
        case "pawn":
          possibleMovements = pawnMovement(board, selectedPos, isWhite);
          break;
        case "rook":
          possibleMovements = rookMovement(board, selectedPos, isWhite);
          break;
        case "knight":
          possibleMovements = horseMovement(board, selectedPos, isWhite);
          break;
        case "bishop":
          possibleMovements = bishopMovement(board, selectedPos, isWhite);
          break;
        case "queen":
          possibleMovements = queenMovement(board, selectedPos, isWhite);
          break;
        case "king":
          let castling = false;
          if (selectedPiece > 14) castling = true;
          possibleMovements = kingMovement(board, selectedPos, isWhite, castling);
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

        beforeboard = checkPosition(board, beforeboard, possibleMovements, isValid, selectedPiece, selectedPos);
      }
    }
  }

  selectedPiece = 0;

  askForPos(board, beforeboard);
}

function askQuestionSync(question: string): string {
  return readlineSync.question(question);
}

function checkPosition(board: number[][], beforeboard: number[][], possibleMovements: number[][], isValid: boolean, selectedPiece: number, originalPos: number[]): number[][] {
  let pickedMovement = askQuestionSync('Select one of the positions marked with #: ')
  let selectedMovement = JSON.parse(pickedMovement);
  for (const possibleMovement of possibleMovements) {
    if (possibleMovement[0] == selectedMovement[0] && possibleMovement[1] == selectedMovement[1]) isValid = true;
  }

  if (originalPos[0] == selectedMovement[0] && originalPos[1] == selectedMovement[1]) isValid = true;
    
  if (isValid) {
    board[selectedMovement[0]][selectedMovement[1]] = selectedPiece;
    beforeboard = JSON.parse(JSON.stringify(board));
    return beforeboard;
  } else {
    return checkPosition(board, beforeboard, possibleMovements, isValid, selectedPiece, originalPos);
  }
}

// Inicia el proceso preguntando al usuario
askForPos(board, beforeboard);
