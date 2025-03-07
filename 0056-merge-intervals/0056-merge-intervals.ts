function merge(intervals: number[][]): number[][] {
    if(intervals.length <= 1){
        return intervals;
    }
    intervals.sort((a, b) => {
        if(a[0] < b[0]){
            return -1;
        }
        if(a[0] > b[0]){
            return 1;
        }
        return 0;
    })
    let out = [intervals[0]];
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0]  <=  out[out.length-1][1] && intervals[i][1] > out[out.length-1][1]){
            out[out.length-1][1] = intervals[i][1];
        } else if(intervals[i][0]  >  out[out.length-1][1]) {
           out.push(intervals[i]); 
        }
    }
    return out;
}
