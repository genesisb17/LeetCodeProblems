function findRepeatedDnaSequences(dna: string): string[] {
  let slow = 0; 
  let fast = 10;
  let check = new Set<string>();
  let output = new Set<string>();
  
  while(fast <= dna.length){
    let temp = dna.substring(slow, fast);
    if(check.has(temp)){
      output.add(temp);
    } else{
      check.add(temp);
    }
    slow++;
    fast++;
  }
  
  return Array.from(output);
}
