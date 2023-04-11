/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(str) {
   let string = fixString(str);
    console.log(string);
  for(let i = 0; i < string.length/2; i++){
    if(string[i] != string[string.length - 1 - i]){
      return false;
    }
  }
  return true;
}


let fixString = (string) => {
    let out = "";
    for(let s of string){
        let code = s.charCodeAt(0);
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
                out += s.toLowerCase();
            }
    }
    return out;
}









/**

// old submission that seems much more complicated than necessary
var isPalindrome = function(str) {
    let s = "";
    for(let ch of str ){
        if(isAlphanumeric(ch)){
            s+=ch;
        }
    }

    // two pointers
    for(let i = 0; i < s.length/2; i++){
        if(s[i].toLowerCase() != s[s.length-1-i].toLowerCase()){
            return false;
        }
    }
    return true;
    
};

function isAlphanumeric(ch){
    let code = ch.charCodeAt(0);
     if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}
*/