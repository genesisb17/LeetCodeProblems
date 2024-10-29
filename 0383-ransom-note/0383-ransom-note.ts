function canConstruct(ransomNote: string, magazine: string): boolean {
    const noteMap = new Map<string, number>();
    for(let i = 0; i < magazine.length; i++){
        let count = noteMap.get(magazine[i]);
        if(count){
            noteMap.set(magazine[i], ++count);
        } else{
            noteMap.set(magazine[i], 1);
        }
    }
    
    for(let j = 0; j < ransomNote.length; j++){
        let count2 = noteMap.get(ransomNote[j]);
        if(count2){
            noteMap.set(ransomNote[j], --count2);
        }
        else{
            return false;
        }
    }
    return true;
};