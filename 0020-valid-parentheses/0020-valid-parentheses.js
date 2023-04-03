/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let brackets = [];
    
    for(let bracket of s){
        if(bracket == '{' ||bracket == '[' || bracket == '(' ){
            brackets.push(bracket);
        }
        else{
            let curr = brackets.pop();
            switch (bracket) {
                case '}':
                    if(curr != '{'){
                        return false;
                    }
                    break;
                case ']':
                    if(curr != '['){
                        return false;
                    }
                    break;
                case ')':
                    if(curr !='('){
                        return false;
                    }
                    break;
                    
            } 
        }
    }
    
    return brackets.length == 0;
    
};