const maxSort = function(list) {
  let maxList = [];
  let eliminateIndex;

  for ( ;maxList.length < list.length; ) {
    let max = 0;
    for (let index = 0; index < list.length; index++) {
      if (max < list[index]) {
        max = list[index];
      };  
    };

    eliminateIndex = list.indexOf(max);
    list[eliminateIndex] = 0;
    maxList.unshift(max);
  };

  return maxList;
}

const vendCoins = function(amount, denominationSet) {
  let sortedDenominationSet = maxSort(denominationSet);
  let coin;
  let remainingAmount = amount;
  let totalCoin = 0;
  for (let index = sortedDenominationSet.length - 1 ; index >= 0; index--) {
    if (remainingAmount !== 0) {
      let value = sortedDenominationSet[index];

      switch (sortedDenominationSet[index]) {

        case value: coin = Math.floor(remainingAmount / value);
          remainingAmount = remainingAmount - coin * value;
          totalCoin += coin;
          break;

      }
    };

  };

  return totalCoin;
};

exports.vendCoins = vendCoins;
exports.maxSort = maxSort;
