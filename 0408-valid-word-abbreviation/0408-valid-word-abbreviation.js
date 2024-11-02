/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
     let wordPointer = 0;
    let abbrPointer = 0;
    
    while(abbrPointer < abbr.length){
      if(!isNaN(abbr[abbrPointer])){
         if(abbr[abbrPointer] == '0'){
              return false;
         }
        let num = 0;
        while(abbr[abbrPointer] && !isNaN(abbr[abbrPointer])){
          num = num*10 + Number(abbr[abbrPointer++]);
        }
        while(num>0){
          wordPointer++;
          num--;
        }
        if(num == 0 && wordPointer > word.length){
          return false;
        }
      }
      if(word[wordPointer] != abbr[abbrPointer]){
        return false;
      }
      wordPointer++;
      abbrPointer++;
    }
    if(wordPointer < word.length){
      return false;
    }    
    return true;
    
};