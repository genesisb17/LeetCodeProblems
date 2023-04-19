/**
Leverages the Booyer More Majority Vote algorithm 
found a great video here - https://www.youtube.com/watch?v=gY-I8uQrCkk
*/

var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == candidate) count++;
        else{
            if(--count == 0){
                candidate = nums[i];
                count++;
            }
        }
    }
    
    return candidate;
};


var majorityElementSlow = function(nums) {
    
    nums.sort((a, b) => {
        if(a < b) return -1;
        else if(a > b) return 1;
        else return 0;
    });
    console.log(nums)
    return nums[Math.floor(nums.length/2)]
};