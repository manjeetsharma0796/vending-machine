const vendCoins = function(amount, denominationSet) {
  let oneRupeeCoin;
  let twoRupeeCoin;
  let fiveRupeeCoin;
  let tenRupeeCoin;
  let remainingAmount = amount;
  let totalCoin = 0;
  for (let index = denominationSet.length - 1 ; index >= 0; index--) {
    if (remainingAmount !== 0) {
      let value = denominationSet[index];

      switch (denominationSet[index]) {

        case value: tenRupeeCoin = Math.floor(remainingAmount / value);
          remainingAmount = remainingAmount - tenRupeeCoin * value;
          totalCoin += tenRupeeCoin;
          break;

          //        case 5: fiveRupeeCoin = Math.floor(remainingAmount / 5);
          //          remainingAmount = remainingAmount - fiveRupeeCoin * 5;
          //          totalCoin += fiveRupeeCoin;
          //          break;
          //
          //        case 2: twoRupeeCoin = Math.floor(remainingAmount / 2);
          //          remainingAmount = remainingAmount - twoRupeeCoin * 2;
          //          totalCoin += twoRupeeCoin;
          //          break;
          //
          //        case 1: oneRupeeCoin = Math.floor(remainingAmount / 1);
          //          remainingAmount = remainingAmount - oneRupeeCoin * 1;
          //          totalCoin += oneRupeeCoin;
          //          break;
      }
    };

  };

  return totalCoin;
};

exports.vendCoins = vendCoins;
