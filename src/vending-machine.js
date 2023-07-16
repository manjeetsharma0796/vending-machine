const { maxSort } = require("./utility.js");

const getMaxElement = function (list) {
  return Math.max(...list);
};

const vendCoins = function(amount, denominationSet) {
  let sortedDenominationSet = maxSort(denominationSet);
  let remainingAmount = amount;
  let totalCoin = 0;
  let index = sortedDenominationSet.length - 1;

  while (remainingAmount !== 0 && index >= 0) {
    let coinValue = sortedDenominationSet[index];

    let coinQuantity = Math.floor(remainingAmount / coinValue);
    remainingAmount = remainingAmount - coinQuantity * coinValue;
    totalCoin += coinQuantity;
    index--;
  };

  return totalCoin;
};

const determineCoinByDenomination = function (amount, denominationSet) {
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
};

module.exports = {
  vendCoins,
  determineCoinByDenomination,
  getMaxElement
};