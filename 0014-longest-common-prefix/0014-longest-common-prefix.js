/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length == 1) return strs[0]
    
    strs.sort((a, b) => {
        if (a.length < b.length) {
        return -1;
        }
        if (a.length > b.length) {
        return 1;
        }
        return 0;
        });
    
    
    let prefix = strs[0];
    while(prefix.length > 0){
        for(let i = 1; i < strs.length; i++){
            if(prefix == strs[i].substring(0, prefix.length)){
                if(i == strs.length - 1){
                    return prefix;
                } 
            }else{
                    prefix = prefix.substring(0, prefix.length -1);
                    break;
                } 
        }
    }
    
    return prefix;
    
};