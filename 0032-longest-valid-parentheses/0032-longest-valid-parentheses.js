/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    let max = 0;
    let left = right = 0;
    
    for(let i = 0; i< s.length; i++){
        if(s[i] === '(') left++;
        else if(s[i] === ')') right++; 
        if(left == right) {
            max = Math.max(right*2, max);
        } else if (right > left){
            left = right = 0;
        }
    }
    left = right = 0
    
    for(i = s.length - 1; i > 0; i--){
        if(s[i] === ")") right++;
        else if(s[i] == "(") left++;
        if(left == right) {
            max = Math.max(left*2, max);
        } else if (right < left){
            left = right = 0;
        }
    }

    return max;
    
};