/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 1) return nums.length;
    
    let slow = 0;
    let fast = 1;
    let total = nums.length;
    let curr = 0;
    while(fast <= total){
        if(nums[fast] == nums[slow]){
            fast++;
        }
        else{
            nums[++slow] = nums[fast++];
            curr++;
        }
    }
    
    return curr;
    
};