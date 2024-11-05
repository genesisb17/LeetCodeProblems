/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    
  const len = nums.length;
    
  const nextIndex= function(current){
    return ((current + nums[current]) % len + len) % len; 
  }

    if(nums.length < 2){
      return false;
    }
    for(let i = 0; i < nums.length; i++){
      let slow = i;
      let fast = i;
      let pos = nums[i] > 0;
      if(nextIndex(i) == i){
        continue;
      }
      for(let j = 0; j < nums.length; j++){
        fast = nextIndex(fast);
        if(nums[slow] > 0 != pos || nums[fast] > 0 != pos){
         break;
        } 
        fast = nextIndex(fast);
        if(nums[fast] > 0 != pos){
         break; 
        }
         if(slow == fast){
          return true;
        }
      }
    }
    return false;
    
};