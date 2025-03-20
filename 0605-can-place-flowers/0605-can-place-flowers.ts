function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if(n==0) return true;
    let index = 0;
    while(index < flowerbed.length){
        if(flowerbed[index]==1){
            index++;
        }
        else if(flowerbed[index-1]!=1 && flowerbed[index] !=1 && flowerbed[index+1] != 1){
            n--;
            index = index + 2;
        } else{
            index++;
        }
        if(n==0) return true;
    }
    return false;
    
};
