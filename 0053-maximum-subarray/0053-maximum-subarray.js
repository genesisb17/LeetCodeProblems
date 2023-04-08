/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    
  
    
    let curr = nums[0];
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        let num = nums[i];
        curr = Math.max(num, curr + num);
        max = Math.max(curr, max);
    }
    
    return max;
    
    
};