var invalidTransactions = function(transactions) {
    let nameToIndexMap = new Map(); 
    let indeciesAdded = new Set();
    for(let i = 0; i < transactions.length; i++){
        let arr = transactions[i].split(','); // current transaction in array form      
        let transactionsByName = nameToIndexMap.get(arr[0]) ? nameToIndexMap.get(arr[0]) : new Array();                       
        transactionsByName.push(i);
     

        if(arr[2] > 1000){    
            indeciesAdded.add(i);
        }

        for(let x of transactionsByName){
            let p = transactions[x].split(',');
            if(Math.abs(arr[1] - p[1]) <= 60){            
                if(p[3] != arr[3]){  
                    indeciesAdded.add(i);
                    indeciesAdded.add(x);
                }
            }
        }   
        nameToIndexMap.set(arr[0], transactionsByName);
    }

    let out = [];
    for(let i of indeciesAdded){
        out.push(transactions[i]);
    }
    return out;
    
};



