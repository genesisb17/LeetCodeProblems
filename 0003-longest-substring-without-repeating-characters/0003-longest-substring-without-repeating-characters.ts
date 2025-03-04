function lengthOfLongestSubstring(str: string): number {
    let left = 0;
    let right = 1;
    let max = 0;
    
    if(str.length <= 1){
        return str.length;
    }
    
    let letters = new Map();
    letters.set(str[0], 0);
    
    while(right < str.length){
        let spot = letters.get(str[right]);
        if(spot!=undefined && spot >= left){
        max = Math.max((right-left), max)
        left = spot + 1;
        }
        letters.set(str[right], right);
        right++;
        
    }
    max = Math.max((str.length-left), max)
    console.log(left)
    
    console.log(letters)
    return max;
    
};