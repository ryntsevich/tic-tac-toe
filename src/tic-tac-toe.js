class TicTacToe {
    constructor() {
        this.playerSymb = 'x';
        this.filled = 0;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymb;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.playerSymb;
            this.filled++;
            this.playerSymb = (this.playerSymb === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        if (this.winner === null)
            this.winner = this.getWinner();
        if (this.filled === 9 || this.winner !== null)
            return true;
        else
            return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2])
                return this.field[i][0];
        }
        for (let i = 0; i < 3; i++) {
            if (this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i])
                return this.field[0][i];
        }
        if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2])
            return this.field[1][1];
        if (this.field[2][0] === this.field[1][1] && this.field[1][1] === this.field[0][2])
            return this.field[1][1];
        return null;
    }

    noMoreTurns() {
        if (this.filled === 9)
            return true;
        else
            return false;
    }

    isDraw() {
        if (this.winner === null)
            this.winner = this.getWinner();
        if (this.isFinished() && this.winner === null)
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;