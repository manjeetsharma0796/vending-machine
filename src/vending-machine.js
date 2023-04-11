const vendCoins = function(amount) {
  let oneRupeeCoin;
  let twoRupeeCoin;
  let fiveRupeeCoin;
  let remaining;
  let total = 0;

  if (amount !== 0) {
    fiveRupeeCoin = Math.floor(amount / 5);
    remaining = amount - fiveRupeeCoin * 5;
    total += fiveRupeeCoin;
  } else {
    return total;
  };

  if (remaining !== 0) {
    twoRupeeCoin = Math.floor(remaining / 2);
    remaining = remaining - twoRupeeCoin * 2;
    total += twoRupeeCoin;
  }else {
    return total;
  };

  if (remaining !== 0) {
    oneRupeeCoin = Math.floor(remaining / 1);
    remaining = remaining - oneRupeeCoin * 1;
    total += oneRupeeCoin;
  } else {
    return total;
  };

  return total;
}

exports.vendCoins = vendCoins;
