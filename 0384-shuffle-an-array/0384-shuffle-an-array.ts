class Solution {
    arr: number[];
    original: number[];

    constructor(nums: number[]) {
        this.arr = nums;
        this.original = [...nums];
    }

    reset(): number[] {
        return this.original;
    }

    shuffle(): number[] {
        for(let i = this.arr.length -1; i > 0; i--){
            let j = this.getRandom(0, i);
            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
        }
        return this.arr;
    }

    private getRandom(start: number, end: number): number {
        return Math.floor(Math.random()*(end-start+1) + start);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */