function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;
    let chars = new Map<string, number>();
    for(let i = 0; i < s.length; i++){
        let temp = chars.get(s[i]) ?? 0;
        chars.set(s[i], ++temp)
    }

    for(let i = 0; i < t.length; i++){
        let temp = chars.get(t[i]);
        if(!temp) return false;
        chars.set(t[i], --temp)
    }

    for(let [k, v] of chars){
        if(v) return false;
    }

    return true;
};