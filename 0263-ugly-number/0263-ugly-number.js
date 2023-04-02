/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n == 1 || n == 2 || n == 3 || n == 5){
        return true;
    }
    
    while(n > 1){
        if(n % 5 == 0){
            n = n/5;
        } else if(n % 3 == 0){
            n = n/3;
        } else if(n % 2 == 0){
            n = n/2;
        } else{
            return false;
        }
    }
    
    return n == 1;
    
};