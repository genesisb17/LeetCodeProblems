
var majorityElement = function(nums) {
    
    nums.sort((a, b) => {
        if(a < b) return -1;
        else if(a > b) return 1;
        else return 0;
    });
    console.log(nums)
    return nums[Math.floor(nums.length/2)]
};