/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
   // let slow = 0;
    let fast = 0;
    let index = -1;
    
    while(fast < haystack.length){
        console.log(fast)
        if(haystack[fast] == needle[0]){
            index = fast;
  //          slow = fast;
            let valid = true;
            for(let i = 1; i < needle.length; i++){
                if(haystack[++fast] != needle[i]){
                    valid = false;
                    break;
                }
            }
            if(valid) return index;
            else fast = ++index;
        } else{
            fast++;
        }
    }
    
    return -1;
    
};