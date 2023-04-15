/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.items = [];
    this.size = k;
    this.head = -1;
    this.tail = -1;
    this.elements = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {  
    if(this.isFull()) return false;
    if(this.head < 0) this.head = 0;
    if(this.elements < this.size && this.tail < this.size-1){
        this.tail++;        
    } else if(this.elements < this.size && this.tail == this.size-1){
        this.tail = 0;
    }
    this.items[this.tail] = value;   
    this.elements++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    delete this.items[this.head];
    if(this.head == this.size-1){
        this.head = 0;
    } else{
        this.head++;
    }
    this.elements--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.items[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.items[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
        if(this.elements == 0) return true;
        else return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.elements == this.size) return true;
    else return false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */