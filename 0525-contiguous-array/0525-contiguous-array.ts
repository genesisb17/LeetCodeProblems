function findMaxLength(nums: number[]): number {
    let count = [nums[0] == 0 ? -1 : 1];
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i] == 0 ? -1 : 1;
        count[i] = count[i - 1] + temp;
    }

    let max = 0;
    let index = new Map<number, number>();
    index.set(0, -1)
    for (let j = 0; j < count.length; j++) {
        if (index.has(count[j])) {
            max = Math.max(max, (j - index.get(count[j])));
        }
        else {
            index.set(count[j], j)
        }
    }



    return max;



};