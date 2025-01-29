function circularArrayLoop(nums){
if(nums.length < 2){
   return false;
}
    
    for(let i = 0; i < nums.length; i++){
      let slow = i;
      let fast = i;
  
  
        while(true){
        let nextSlow = nextIndex(nums, slow);
        let firstFast = nextIndex(nums, fast);
        let secondFast = nextIndex(nums, firstFast);
        
        if(!sameDirectionCheck(slow, fast, nextSlow, firstFast, secondFast, nums) || slow == nextSlow || firstFast == secondFast){
          break;
        }
          slow = nextSlow;
          fast = secondFast;
          if(slow == fast){
            return true;
          }
        }
      
    }
    return false;
}
function nextIndex(nums, index){
  let n = nums.length;
  return ((index + nums[index]) % n + n) % n;
}
function sameDirectionCheck(slow, fast, nextSlow, firstFast, secondFast, nums){
   return nums[slow] * nums[nextSlow] > 0 && nums[firstFast] * nums[secondFast] > 0 ;
}
