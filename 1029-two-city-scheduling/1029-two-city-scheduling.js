/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
     let diffs = new Array();
     for(let person of costs){
        diffs.push([person[0]-person[1], person])
      }
      diffs.sort((a, b) => {
        if (a[0] < b[0]) {
        return -1;
        }
        if (a[0] > b[0]) {
        return 1;
        }
        return 0;
      });

    let sum = 0;
    for(let i = 0; i < costs.length/2; i++){
      sum+=diffs[i][1][0];
    }
    for(let i = costs.length/2; i < costs.length; i++){
      sum+=diffs[i][1][1];
    }

    return sum;


}