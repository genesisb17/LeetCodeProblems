function isStrobogrammatic(num: string): boolean {
    
    let strobos = new Map<number, number>();
    strobos.set(0, 0);
    strobos.set(8, 8);
    strobos.set(6, 9);
    strobos.set(9, 6);
    strobos.set(1, 1);
    
    if(num.length == 1){
        const n = Number(num[0])
        return (n == 0|| n == 1 || n== 8) ? true : false;
    }
  
    let start = 0;
    let end = num.length-1;
    while(start<=end){
      let check = strobos.get(Number(num[start]));
      if(check!=Number(num[end])){
        return false;
      }
      start++;
      end--;
    }
    
    return true;
}