var maxProfit = function(prices) {
    let lowest_price  = prices[0]
    let diff = 0 ;
    for(let i = 1; i < prices.length ; i++){
        lowest_price = Math.min(lowest_price,prices[i]); 
        diff = Math.max(diff, prices[i] - lowest_price)
    }
      
      return diff
  };

console.log(maxProfit([7,1,5,3,6,4]))

/*

  lowest = prices[0]

 lowest =  [7, 1] = 1;  [1,5] = 1

diff = [0, 1 -1 ] = 0  [1, 5 - 1] = 4

*/