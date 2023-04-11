const vendCoins = function(amount) {
  let oneRupeeCoin;
  let twoRupeeCoin;
  let fiveRupeeCoin;
  let tenRupeeCoin;
  let remaining;
  let total = 0;

  if (amount !== 0) {
    tenRupeeCoin = Math.floor(amount / 10);
    remaining = amount - tenRupeeCoin * 10;
    total += tenRupeeCoin;
  } else {
    return total;
  }
  if (remaining !== 0) {
    fiveRupeeCoin = Math.floor(remaining / 5);
    remaining = remaining - fiveRupeeCoin * 5;
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
