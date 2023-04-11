/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /*

 // slightly worse with time, much better for space
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        for(let j = i+1; j < nums.length; j++){
            if(nums[j]==diff){
                return [i, j];
            }
        }
    }
    
    
};
*/

/**
// better for time, worse for space
var twoSum = function(nums, target){
    let diffs = new Map();
    for(let i = 0; i < nums.length; i++){
        let com = target - nums[i];
        if(diffs.has(nums[i])){
            return [i, diffs.get(nums[i])];
        }
        diffs.set(com, i);
    }
};
*/


function twoSum(array, target) {

  

  let diffs = new Map();
  for(let i = 0; i < array.length; i++){
    if(!diffs.has(array[i])){
      diffs.set(target - array[i], i);
    } else{
      return [i, diffs.get(array[i])];
    }
  }

  return [];

}
