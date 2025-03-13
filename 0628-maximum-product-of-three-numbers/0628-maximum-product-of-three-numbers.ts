function maximumProduct(arr: number[]): number {
      
  if(arr.length < 3){
    throw new Error();
  }
  
  if(arr.length == 3){
    return arr[0] * arr[1] * arr[2];
  }
  
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;
  

  
  for(let n of arr){
    if (n>=max1){
      max3=max2;
      max2=max1;
      max1=n;
    } else if(n>=max2){
      max3=max2;
      max2=n;
    } else if(n >= max3){
      max3 = n;
    }
    
    if(n <= min1){
      min2 = min1;
      min1 = n;
    } else if (n <= min2){
      min2 = n;
    }
  }
  
  
  return Math.max((max1*min1*min2), (max1*max2*max3))
    
};