function maxArea(height: number[]): number {

    let start = 0;
    let end = height.length-1;
    let max = 0;

    if(height.length == 2){
        return Math.min(height[0], height[1]);
    }

    while(start<=end){
        let area = (Math.min(height[start], height[end]))*(end-start);
        max = Math.max(max, area);

        if(height[start] > height[end]){
                end--;
        }  else {
                start++;    
        }
    }
    return max;
};