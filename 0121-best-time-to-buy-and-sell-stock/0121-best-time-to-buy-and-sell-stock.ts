function maxProfit(stockPrices: number[]): number {
  if(stockPrices.length<=1){
    return 0;
  }

  let maxProfit = stockPrices[1] - stockPrices[0];
  let minPrice = stockPrices[0];
  
  for(let i = 1; i < stockPrices.length; i++){
    maxProfit = Math.max(stockPrices[i]-minPrice, maxProfit);
    minPrice = Math.min(stockPrices[i], minPrice);
  }
  

  return Math.max(0, maxProfit);
    
};