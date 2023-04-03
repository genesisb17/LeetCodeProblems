/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    // set of invalid indecies
    let invalid = new Set();
    
    // stack of parens
    let brackets = [];
    
    for(let i = 0; i < s.length; i++){
        if( s[i] == '(' ){
            brackets.push([s[i], i]);
        }
        else if( s[i] == ')' ){
            if(brackets.length == 0){
                invalid.add(i);
            }
            else{
                brackets.pop();
            }
              
        }
    }
    if(brackets.length != 0){
        for(let b of brackets){
            invalid.add(b[1]);
        }
    }
    
    out = "";
    for(let i = 0; i < s.length; i++){
        if(!invalid.has(i)){
            out+=s[i];
        }
    }
    return out;
    
};