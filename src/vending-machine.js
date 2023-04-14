const utility = require("./utility.js")
const maxSort = utility.maxSort 
// const getMaxElement = function(list) {
//   let max = list[0];
// 
//   for (let value of list) {
//     max = Math.max(max, value);
//   };
// 
//   return max;
// }
// 
// const maxSort = function(list) {
//   let unsorted = list.slice(0);
//   let sorted = [];
// 
//   while (unsorted.length > 0) {
//     let max = getMaxElement(unsorted);
// 
//     unsorted.splice(unsorted.indexOf(max), 1);
//     sorted.unshift(max);
//   };
// 
//   return sorted;
// }

const vendCoins = function(amount, denominationSet) {
  let sortedDenominationSet = maxSort(denominationSet);
  let remainingAmount = amount;
  let totalCoin = 0;
  let index = sortedDenominationSet.length - 1;

  while (remainingAmount !== 0 && index >= 0) {
    let coinValue = sortedDenominationSet[index];

    let  coinQuantity = Math.floor(remainingAmount / coinValue);
    remainingAmount = remainingAmount - coinQuantity * coinValue;
    totalCoin += coinQuantity;
    index--;
  };

  return totalCoin;
};

const determineCoinByDenomination = function(amount, denominationSet) {
  let quantitySet = {};
  let remainingAmount = amount;
  let sortedSet = maxSort(denominationSet);

  for (let index = sortedSet.length - 1; index >= 0; index--) {
    let value = sortedSet[index];
    let quantity = vendCoins(remainingAmount, [value]);

    quantitySet[value] = quantity;  
    remainingAmount = remainingAmount - quantity * value;
  };

  return quantitySet;
}

exports.vendCoins = vendCoins;
exports.determineCoinByDenomination = determineCoinByDenomination;
