class Vector2D {
    vec: number[][];
    nextVal: number | null;
    i: number;
    j: number;


    constructor(vec: number[][]) {
        this.vec = vec;
        this.i = 0;
        this.j = 0;

        this.advance();
    }

    next(): number | null {
        if(!this.hasNext()){
            return null;
        }
        let prev = this.vec[this.i][this.j];
        this.j++;

        this.advance();
        return prev;
    }

     private advance(): void {
        while (this.i < this.vec.length && this.j >= this.vec[this.i].length) {
            this.i++;
            this.j = 0;
        }
    }

    hasNext(): boolean {
     return this.i < this.vec.length;
    }
}
