const vendCoins = function(amount, denominationSet) {
  let oneRupeeCoin;
  let twoRupeeCoin;
  let fiveRupeeCoin;
  let tenRupeeCoin;
  let remainingAmount = amount;
  let totalCoin = 0;
  for (let index = denominationSet.length - 1 ; index >= 0; index--) {
    switch (denominationSet[index]) {

      case 10:  if (remainingAmount !== 0) {
        tenRupeeCoin = Math.floor(remainingAmount / 10);
        remainingAmount = remainingAmount - tenRupeeCoin * 10;
        totalCoin += tenRupeeCoin;
      } else {
        return totalCoin;
      };

        break;

      case 5:  if (remainingAmount !== 0) {
        fiveRupeeCoin = Math.floor(remainingAmount / 5);
        remainingAmount = remainingAmount - fiveRupeeCoin * 5;
        totalCoin += fiveRupeeCoin;
      } else {
        return totalCoin;
      };

        break;

      case 2: if (remainingAmount !== 0) {
        twoRupeeCoin = Math.floor(remainingAmount / 2);
        remainingAmount = remainingAmount - twoRupeeCoin * 2;
        totalCoin += twoRupeeCoin;
      }else {
        return totalCoin;
      };

        break;

      case 1: if (remainingAmount !== 0) {
        oneRupeeCoin = Math.floor(remainingAmount / 1);
        remainingAmount = remainingAmount - oneRupeeCoin * 1;
        totalCoin += oneRupeeCoin;
      } else {
        return totalCoin;
      };

        break;
    }
  }

  return totalCoin;
};

exports.vendCoins = vendCoins;
