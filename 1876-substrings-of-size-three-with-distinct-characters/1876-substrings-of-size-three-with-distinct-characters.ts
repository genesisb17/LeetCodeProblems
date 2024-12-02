function countGoodSubstrings(s: string): number {
    if (s.length < 3 ) return 0;
    let p = 2;
    let count = 0;
    do{
        if(s[p] && s[p] != s[p-1] && s[p] != s[p-2] && s[p-1]!= s[p-2]){
            count++;
        }
        p++;
    } while(p <= s.length);
    return count;
    
    
    /***
    let p = 2;
    let count = 0;
let window = new Set<string>();
    window.add(s[0]);
    window.add(s[1]);
    window.add(s[2]);
    if(window.size==3){
        count++;
    }
    while (p <= s.length){
        window.delete(s[p-2]);
        window.add(s[++p]);
        if(window.size==3){
        count++;
        }
    }
    return count;
    */
};