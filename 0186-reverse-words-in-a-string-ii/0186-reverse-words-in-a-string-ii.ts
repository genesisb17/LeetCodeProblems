/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {

    let left = 0;
    let right = s.length - 1;

    // reverse whole string 
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }


    // Step 2: Reverse each word in the reversed string
    let start = 0;
    for (let end = 0; end <= s.length; end++) {
        // End of a word (or end of array)
        if (end === s.length || s[end] === ' ') {
            let a = start, b = end - 1;
            while (a < b) { // Fixed the boundary condition from `<=` to `<`
                let temp = s[a];
                s[a] = s[b];
                s[b] = temp;
                a++;
                b--;
            }
            start = end + 1; // Move `start` to the beginning of the next word
        }
    }
    
};