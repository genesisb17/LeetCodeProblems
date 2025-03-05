function canPermutePalindrome(str: string): boolean {

  let set = new Set<string>();
  for(let i = 0; i < str.length; i++){
    if(set.has(str[i])){
      set.delete(str[i])
    } else{
      set.add(str[i]);
    }
  }
  
  
  if((str.length % 2 == 0 && set.size == 0) || (str.length % 2 == 1 && set.size == 1)) {
    return true
  }
  return false;
  
    
};