function lengthOfLongestSubstringTwoDistinct(s: string): number {
    if(s.length <=1){
        return s.length;
    }
    let left = 0;
    let right = 1;
    let max = 0;

    let map = new Map<string, number>();
    map.set(s[0], 0);
    while(right < s.length){
        if(map.get(s[right]) == undefined && map.size == 2 ){
            let keys = Array.from(map.keys());
            max = Math.max((right-left), max);
            left = Math.min(map.get(keys[0]), map.get(keys[1])) + 1; // Move `left` past the leftmost character
            map.delete(s[left - 1]); // Remove the leftmost character from the map

        } 
        map.set(s[right], right);
        right++;
    }
    max = Math.max(max, right - left );
    return max;
    
};


/**
   // solved the complete wrong question at first lmaoooo 
   // was solving longest substring where each character was repeated max twice here's that though

    if(s.length <=1){
        return s.length;
    }
    let left = 0;
    let right = 1;
    let max = 0;

    // track the char and the indecies. 
    let letters = new Map<string, number[]>();    
    letters.set(s[0], [0]);
    while(right < s.length){
        let arr = letters.get(s[right]);
        if(letters.get(s[right]) === undefined){
            arr = [right];
        }
        
        else if(arr != undefined && arr.length == 2){
            let r = arr[1];
            let l = arr.shift();
            arr.push(right);
            max = Math.max((r-left), max)
            left = l + 1;
        } else if (arr != undefined && arr.length == 1){
            arr.push(right)
        }

        letters.set(s[right], arr);
        right++;
    }
    max = Math.max((s.length-left), max)
    return max; 
 */