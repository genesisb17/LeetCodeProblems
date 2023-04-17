/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 
 can do BFS or DFS but DFS would be too much because it's not optimized 

 */
var wallsAndGates = function(rooms) {
    
    let row = rooms.length;
    let col = rooms[0].length;
    
    if(row == 0 || col == 0) return;
    
    let reach = []; //use array as queue with FIFO so push() to enqueue and shift() to dequeue
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // -> , ^ , <-,  V
    
    // Store all the 0's (gates) in "queue"
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(rooms[i][j] == 0) {
                reach.push([i, j]);
            }
        }
    }
    
    
    /**
       Poll the 0's and check the neighbors for infinity
       Update with space with one higher than the previous neighbor
       convenient as this starts with 0 so 1 + 0 is going to give 1 
       in next iteration we can add 1 to the 1 so the distance is 2
    */
    while(reach.length > 0){
        let curr = reach.shift();
        
        for(let dir of directions){
            let x = curr[0] + dir[0];
            let y = curr[1] + dir[1];
            //make sure we are inbounds and 
            if(x < 0 || y < 0 || x >= row || y >= col || rooms[x][y] != 2147483647 ){
              continue;
            }
            reach.push([x, y]);
            rooms[x][y] = rooms[curr[0]][curr[1]] + 1;
        }
    }
    
};