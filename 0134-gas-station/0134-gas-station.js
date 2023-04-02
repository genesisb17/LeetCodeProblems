/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
  if(getArrSum(gas) < getArrSum(cost)){
        return -1;
    }
    let currTank = 0;
    let startStation = 0;
    for(let i = 0; i < gas.length; i++){
        if(currTank < 0){
            startStation = i;
            currTank = 0;
        }
        currTank = currTank + gas[i] - cost[i];
    }

    return startStation;
    
}


function getArrSum(arr){
    let out = 0;
    for(let a of arr){
        out += a;
    }

    return out;
}