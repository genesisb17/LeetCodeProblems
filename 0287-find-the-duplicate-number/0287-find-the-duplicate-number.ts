function findDuplicate(nums: number[]): number {
    /** inefficient solution:   
    let slow = 0;
    let fast = 0;
    
    for(let i = 0; i < nums.length; i++){
      slow = i;
      for(let j = i+1; j < nums.length; j++){
        if(nums[i] == nums[j]){
          return nums[i];
        }
      }
    }

    return -1
    */
    
    // Cycle detection tortoise and hare
    let slow = nums[0];
    let fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while(slow!=fast)
    
    slow = nums[0];
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return fast;
};