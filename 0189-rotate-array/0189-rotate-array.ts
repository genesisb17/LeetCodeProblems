/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {


    // 1 2 3 4 5 6 7
    // 7 6 5 4 3 2 1
    // 5 6 7 4 3 2 1 
    // 5 6 7 1 2 3 4

    k = k % nums.length;
    if(nums.length > 1){
    let left = 0;
    let right = nums.length - 1

    nums = reverse(left, right, nums);

    nums = reverse(0, k-1, nums);

    nums = reverse(k, nums.length - 1, nums);
}
}

function reverse(left: number, right: number, nums: number[]){
     while(left < right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
}
