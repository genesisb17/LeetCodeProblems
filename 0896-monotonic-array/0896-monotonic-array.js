
function isMonotonic(arr) {
  if(arr.length <= 1) return true;
    
    return isNonDecreasing(arr) || isNonIncreasing(arr);
}

let isNonDecreasing = (arr) => {
     for(let i = 1; i < arr.length; i++){
      if(arr[i-1] > arr[i]){
        return false;
      }
     }    
    return true;
}

let isNonIncreasing = (arr) => {
    for(let i = 1; i < arr.length; i++){
      if(arr[i-1] < arr[i]){
        return false;
      }
    }
    
    return true;
}





