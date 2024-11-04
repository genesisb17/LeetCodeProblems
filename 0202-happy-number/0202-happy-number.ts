function isHappy(n: number): boolean {
    let slow = n;
    let fast = sumOfSquaredDigits(n);
    
    while(true){
      slow = sumOfSquaredDigits(slow);
      fast = sumOfSquaredDigits(fast);
      fast = sumOfSquaredDigits(fast);
      if(fast == 1){
        return true;
      } else if ( fast == slow){
        return false;
      }
    }

    return true;
};


function sumOfSquaredDigits(number) {
    let totalSum = 0;
    while (number > 0) {
        let digit = number % 10; // Extract the digit before division
        number = Math.floor(number / 10); // Update the number
        totalSum += digit ** 2;
    }
    return totalSum;
}