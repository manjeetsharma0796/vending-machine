const getMaxElement = function(list) {
  let max = list[0];

  for (let value of list) {
    max = Math.max(max, value);
  };

  return max;
}

const maxSort = function(list) {
  let unsorted = list.slice(0, list.length);
  let sorted = [];

  while (unsorted.length > 0) {
    let max = getMaxElement(unsorted);

    unsorted.splice(unsorted.indexOf(max), 1);
    sorted.unshift(max);
  };

  return sorted;
}

const vendCoins = function(amount, denominationSet) {
  let sortedDenominationSet = maxSort(denominationSet);
  let remainingAmount = amount;
  let totalCoin = 0;
  let index = sortedDenominationSet.length - 1;

  while (remainingAmount !== 0 && index >=0) {
    let coinValue = sortedDenominationSet[index];

    let  coinQuantity = Math.floor(remainingAmount / coinValue);
    remainingAmount = remainingAmount - coinQuantity * coinValue;
    totalCoin += coinQuantity;
    index--;
  };

  return totalCoin;
};

exports.vendCoins = vendCoins;
exports.maxSort = maxSort;
exports.getMaxElement = getMaxElement;
