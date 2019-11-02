/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // YOUR CODE HERE
  var comparison = {};
  var buyingChoice = prices[0];
  for(let i = 0; i < prices.length - 1; i++) {
  	if(prices[i] <= buyingChoice) {
  		buyingChoice = prices[i];
  		for( let j = i + 1; j < prices.length; j++) {
  		if(prices[i] > prices[j]) {
  			var sellingChoice = prices[j];
  			buyingChoice = prices[i];
  			}
  		}
  	}
  	 

  	comparison.buyingChoice = buyingChoice;
  	comparison.sellingChoice = sellingChoice;	
  }
  if(buyingChoice <= sellingChoice) {
  	return 0;
  }else {
  	return comparison;	
  }
  

};
