/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.width = size;
    this.total = 0; 
    this.window = [];
    this.point = -1;
    
};


MovingAverage.prototype.next = function(val) {  
    if(this.total < this.width){
        this.total++;       
        this.point++;
    } else if(this.total == this.width && this.point == this.width-1){
        this.point = 0;
    } else if(this.total == this.width && this.point < this.width-1){
        this.point++;
    }
    this.window[this.point] = val;
    return this.calculateAvg(this.window, this.total);
};

MovingAverage.prototype.calculateAvg = (win, t) => {
    let sum = 0;
    for(let i = 0; i < t; i++){
        sum += win[i];
    }
    return sum/t;
}

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */