/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // if (prices.length === 1){
  //     return 0
  // }
  //find position of lowest value
  //find highest value which comes after position of lowest value

  //find biggest difference in the array

  let difference = 0;
  const arr = [];

  let smallest = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      difference = prices[i] - prices[j];

      if (smallest > difference) {
        smallest = difference;
      }
      // arr.push(difference);
    }
  }

  //     console.log(arr)

  //     let smallest = arr[0];
  //     for(let i=0; i<arr.length; i++){
  //         if(smallest > arr[i]){
  //             smallest = arr[i];
  //         }
  //     }
  //     if(smallest >= 0){
  //         return 0
  //     }

  // return smallest;
  return Math.abs(smallest);
};

/*
var maxProfit = function(prices) {
  //find position of lowest value
  //find highest value which comes after position of lowest value
  
  let smallest = prices[0];
  let smallestIndex = 0;
  
  for(let i=0; i<prices.length; i++){
      if(prices[i]<smallest){
          smallest = prices[i];
          smallestIndex = i;
         }
  }
  

  let largest = 0;
  // let largestIndex = 0;
  
  for(let i=0; i<prices.length; i++){
      if(prices[i]>largest && i>smallestIndex){
          largest = prices[i];
          // largestIndex = i;
      }
  }
  console.log(smallest, largest)    
  
  if(largest === 0){
      return 0
  }
  
  const maxProfit = largest - smallest;
  return maxProfit;
};
*/
