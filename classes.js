class pawn {
    __constructor(color, x, y) {
        this.color = color;
        this.hasMoved = false;
        this.x = x;
        this.y = y;
    }

    move(board) {
        let possiblePlaces = [];

        if (this.color == 0 && board[x][y + 1][2] == 0) {
            possiblePlaces.push([this.x, this.y + 1]);
            if (!this.hasMoved) {
                possiblePlaces.push([this.x, this.y + 2]);
            }
        } else if (board[x][y - 1][2] == 0) {
            possiblePlaces.push([this.x, this.y - 1]);
            if (!this.hasMoved) {
                possiblePlaces.push([this.x, this.y - 2]);
            }
        }

        return possiblePlaces;
    }
}

class bishop {
    __constructor(color) {
        this.color = color;
    }
}

class rook {
    __constructor(color) {
        this.color = color;
    }
}

class queen {
    __constructor(color) {
        this.color = color;
    }
}

class king {
    __constructor(color) {
        this.color = color;
    }
}

class knight {
    __constructor(color) {
        this.color = color;
    }
}