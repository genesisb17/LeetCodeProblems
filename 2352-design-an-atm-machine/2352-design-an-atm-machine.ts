class ATM {
    balances: number[];
    bills: number[];

    constructor() {
        this.balances = [0, 0, 0, 0, 0];
        this.bills = [20, 50, 100, 200, 500];  // Bill denominations
    }

    deposit(count: number[]): void {
        for (let i = 0; i < 5; i++) {
            this.balances[i] += count[i]; 
        }
    }

    withdraw(amount: number): number[] {
        let temp = this.balances.slice();  // Copy balances
        let out = [0, 0, 0, 0, 0];

        // Process from largest bill to smallest
        for (let i = 4; i >= 0 && amount > 0; i--) {
            if (this.bills[i] > amount) continue;  // Skip if bill value is larger than amount

            let numNeeded = Math.floor(amount / this.bills[i]);  // Max bills needed
            let numAvailable = temp[i];  // Max we actually have

            let numToUse = Math.min(numNeeded, numAvailable);
            amount -= numToUse * this.bills[i];  // Reduce amount
            temp[i] -= numToUse;  // Remove bills from ATM
            out[i] = numToUse;  // Track withdrawal

            if (amount === 0) break;  // Exit early if amount is fully withdrawn
        }

        if (amount === 0) { 
            this.balances = temp;  //  Update balances only if successful
            return out;
        }
        return [-1];  //  If unable to fulfill withdrawal, return failure
    }
}
/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */