/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let table = []
    for(let i = 0; i <= n; i++){
        table.push(0);
    }
    table[0] = 0;
    table[1] = 1;
    table[2] = 2;
    for(let i = 3; i <= n; i++){
        table[i] = table[i-1] + table[i-2];
    }
    return table[n];
    
    
};