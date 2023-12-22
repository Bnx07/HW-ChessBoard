function getPieces() {
    let pieces = document.querySelectorAll('i');

    let piecesArray = [];

    for (const element of pieces) {

        let white = false;
        let type = "none";
        if (!element.classList.contains('fa-solid')) white = true;

        if (element.classList.contains('fa-chess-king')) type = "king";
        if (element.classList.contains('fa-chess-queen')) type = "queen";
        if (element.classList.contains('fa-chess-pawn')) type = "pawn";
        if (element.classList.contains('fa-chess-knight')) type = "knight";
        if (element.classList.contains('fa-chess-rook')) type = "rook";
        if (element.classList.contains('fa-chess-bishop')) type = "bishop";

        piecesArray.push([white, type]);
    }

    return piecesArray;
}
getPieces();