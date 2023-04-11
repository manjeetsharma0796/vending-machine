const vendCoins = function(amount, denominationSet) {
  let oneRupeeCoin;
  let twoRupeeCoin;
  let fiveRupeeCoin;
  let tenRupeeCoin;
  let remaining = amount;
  let total = 0;
  for ( ; 0 <= denominationSet.length; ) {
    switch (denominationSet.pop()) {
      case 10:  if (remaining !== 0) {
        tenRupeeCoin = Math.floor(remaining / 10);
        remaining = remaining - tenRupeeCoin * 10;
        total += tenRupeeCoin;
      } else {
        return total;
      };

        break;

      case 5:  if (remaining !== 0) {
        fiveRupeeCoin = Math.floor(remaining / 5);
        remaining = remaining - fiveRupeeCoin * 5;
        total += fiveRupeeCoin;
      } else {
        return total;
      };

        break;

      case 2: if (remaining !== 0) {
        twoRupeeCoin = Math.floor(remaining / 2);
        remaining = remaining - twoRupeeCoin * 2;
        total += twoRupeeCoin;
      }else {
        return total;
      };

        break;

      case 1: if (remaining !== 0) {
        oneRupeeCoin = Math.floor(remaining / 1);
        remaining = remaining - oneRupeeCoin * 1;
        total += oneRupeeCoin;
      } else {
        return total;
      };
    }
  }

  return total;
};

exports.vendCoins = vendCoins;
