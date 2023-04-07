/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    
    intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
        return 1;
        }
        return 0;
        });
    
    
    let result = [];
    result.push(intervals[0]);
    
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] > result[result.length -1][1]){
            result.push(intervals[i]);
        } else if(intervals[i][0] <= result[result.length - 1][1]){
            
            if(intervals[i][1]> result[result.length -1][1]){
                result[result.length - 1][1] = intervals[i][1];
            }
        }
    }

    return result;
    
};


