class Bank {
    balance: number[];

    constructor(balance: number[]) {
        this.balance = balance;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if(!this.accountCheck(account1) || !this.accountCheck(account2)) return false;
        let balanceAmt = this.balance[account1-1];
        if(balanceAmt < money){
            return false;
        }
        this.balance[account1-1] = balanceAmt-money;
        this.balance[account2-1] = this.balance[account2-1]+money;
        return true;
    }

    deposit(account: number, money: number): boolean {
        if(!this.accountCheck(account)) return false;
        if(money < 0) return false;
        this.balance[account-1] = this.balance[account-1]+money;
        return true;
    }

    withdraw(account: number, money: number): boolean {
        if(!this.accountCheck(account)) return false;
        if(this.balance[account-1] < money || money < 0) return false;
        this.balance[account-1] = this.balance[account-1]-money;
        return true;
    }

    private accountCheck(account: number){
        if(account < 1 || account > this.balance.length){
            return false;
        }
        return true;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */