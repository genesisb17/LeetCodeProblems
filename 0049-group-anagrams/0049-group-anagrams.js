/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /**
    
     */

     let arr = new Map();
     for(let str of strs){
         let sorted = sortString(str);
         if(arr.has(sorted)){
            let temp = arr.get(sorted);
            temp.push(str);
            arr.set(sorted, temp);
         }
         else{
             arr.set(sorted, [str]);
         }
     }

  
return Array.from(arr.values());


    
};


function sortString(str){
    return str.split('').sort().join('');

};


