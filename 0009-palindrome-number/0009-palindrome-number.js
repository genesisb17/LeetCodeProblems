/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let num = "" + x;
    
    if(num.length <= 1)  return true;
    
    for(let i = 0; i < num.length/2; i++){
        if(num[i] != num[num.length - 1 -i]){
            return false;
        }
    }
    
    return true;
    
};