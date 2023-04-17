/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function(arr) {
    let check = new Set();
    for(let num of arr){
        if(check.has(num*2) || check.has(num/2))return true;
        check.add(num);
    }
    return false;
}


var checkIfExistSlow = function(arr) {
    
    arr.sort((a, b) => {
        if(Math.abs(a) > Math.abs(b)) return 1;
        if(Math.abs(a) < Math.abs(b)) return -1;
        return 0;
    })
    
    let check = new Set();
    for(let num of arr){
        if(check.has(num))return true;
        check.add(num*2);
    }
    
    return false;
    
};