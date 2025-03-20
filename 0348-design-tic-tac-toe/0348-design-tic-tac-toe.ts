class TicTacToe {

    board: number[][];

    constructor(n: number) {
        this.board = Array(n).fill(null).map(() => Array(n).fill(0));
    }

    move(row: number, col: number, player: number): number {
        this.board[row][col] = player;
        let rowCount = 0;
        let colCount = 0;
        let leftCount = 0;
        let rightCount = 0;
        for(let i = 0; i < this.board.length; i++){
            if(this.board[row][i] == player) colCount++;
            if(this.board[i][col] == player) rowCount++;
            if(this.board[i][i] == player) leftCount++;
            if(this.board[this.board.length-1-i][i] == player) rightCount++;
        }
        if(rowCount == this.board.length || colCount == this.board.length || leftCount == this.board.length || rightCount == this.board.length){
            return player;
        }
        return 0;
    }


}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)i 
 */