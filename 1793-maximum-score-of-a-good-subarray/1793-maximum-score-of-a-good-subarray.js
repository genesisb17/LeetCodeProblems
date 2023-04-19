/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    
    let left = k;
    let right = k;
    let min = nums[k];
    let maxScore = nums[k];
    
    while(left > 0 || right < nums.length -1){
        if(left == 0){
            right++;
        } 
        else if(right == nums.length -1){
          left--;  
        } 
        else if(nums[left -1] < nums[right + 1]) {
            right++;
        }
        else {
            left--;
        }
        
        min = Math.min(min, Math.min(nums[left], nums[right]));
        maxScore = Math.max(min*(right-left+1), maxScore);
    }
    
    return maxScore;
    
};

