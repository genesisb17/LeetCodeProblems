function canPermutePalindrome(str: string): boolean {

  let set = new Set<string>();
  for(let i = 0; i < str.length; i++){
    if(set.has(str[i])){
      set.delete(str[i])
    } else{
      set.add(str[i]);
    }
  }
  
  
return set.size <= 1;
  
    
};