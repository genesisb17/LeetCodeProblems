/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    event1[0] = timeToInt(event1[0]);
    event1[1] = timeToInt(event1[1]);
    event2[0] = timeToInt(event2[0]);
    event2[1] = timeToInt(event2[1]);
    
    
    let firstEnd =  event1[0] <= event2[0] ? event1[1] : event2[1];
    let secondStart = event1[0] <= event2[0] ? event2[0] : event1[0];
    
    return firstEnd >= secondStart;
};

var timeToInt = (str) => {
    let hr = Number(str.substring(0, 2));
    let min = Number(str.substring(3));
    return (hr*100) + min;
}