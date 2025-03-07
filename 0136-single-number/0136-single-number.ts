function singleNumber(nums: number[]): number {

    let s = new Set();
    for(let i = 0; i < nums.length; i++){
       if(!s.has(nums[i])){
        s.add(nums[i]);
       } else if(s.has(nums[i])){
        s.delete(nums[i])
       }
    } 
    for(const n of s){
       return Number(n)
    }

   
};