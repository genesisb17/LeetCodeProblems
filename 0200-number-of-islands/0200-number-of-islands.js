/**
 * @param {character[][]} grid
 * @return {number}
 
 going to use with BFS (can also do with DFS and disjointed sets)
 */
var numIslands = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;
    let islands = 0;
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // -> , ^ , <-,  V
    
    if(rows == 0 || cols == 0) return 0;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            
            if(grid[i][j] === '1'){
                islands++;
                const queue = [[i, j]]
                grid[i][j] = '0';
                while(queue.length > 0){
                      let curr = queue.shift();
                      for(let dir of directions){
                        let x = curr[0] + dir[0];
                        let y = curr[1] + dir[1];
                        if(x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] == '0'){
                          continue;
                        }
                        queue.push([x, y]);
                        grid[x][y] = '0';
                        }
                    
                }              
            }
        }
    }
    
    return islands;
    
};