var canJump = function(nums) {
    let maxReach = 0;
    
    for(let i = 0; i < nums.length; i++){
        
         if (maxReach < i) {
            return false;  // We cannot reach this position.
        }
        
        maxReach = Math.max(nums[i] + i, maxReach);
        
        if (maxReach >= nums.length - 1) {
            return true;  // We can reach the last position.
        }
      
    }
    
    return true;
    
};


