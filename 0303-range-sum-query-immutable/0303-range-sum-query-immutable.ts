class NumArray {

    arr: number[];

    constructor(nums: number[]) {
        this.arr = this.prefix(nums);
    }

    prefix(nums: number[]): number[]{
        let out = [nums[0]];
        for(let i = 1; i < nums.length; i++){
            out[i] = nums[i] + out[i-1]
        }
        console.log(out);
        return out;
    }

    sumRange(left: number, right: number): number {
        if(left == 0) return this.arr[right];
        return this.arr[right] - this.arr[left-1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */