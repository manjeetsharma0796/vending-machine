const { describe, it } = require('node:test');
const assert = require('assert');

const { vendCoins,
  getMaxElement,
  determineCoinByDenomination } = require('../src/vending-machine.js');
const { maxSort } = require('../src/utility.js');

describe('vendCoins', () => {
  it('Should give 0 coins for amount Rs 0 when the denomination set is Rs1', () => {
    const actual = vendCoins(0, [1]);
    const expected = 0;

    assert.strictEqual(actual, expected);
  });

  it('Should give 1 coins for amount Rs 1 when the denomination set is Rs1', () => {
    const actual = vendCoins(1, [1]);
    const expected = 1;

    assert.strictEqual(actual, expected);
  });

  it('Should give 3 coins for amount Rs 5 when the denomination set is Rs1, Rs2', () => {
    const actual = vendCoins(5, [1, 2]);
    const expected = 3;

    assert.strictEqual(actual, expected);
  });
  it('Should give 4 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs5', () => {
    assert.strictEqual(vendCoins(13, [1, 2, 5]), 4);
  });

  it('Should give 3 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10', () => {
    assert.strictEqual(vendCoins(13, [1, 2, 10]), 3);
  });

  it('Should give 3 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10', () => {
    assert.strictEqual(vendCoins(13, [1, 2, 10]), 3);
  });

  it('Should give 3 coins for amount Rs 18 when the denomination set is Rs1, Rs2, Rs5, Rs10', () => {
    assert.strictEqual(vendCoins(18, [1, 2, 5, 10]), 4);
  });

  it('Should give 6 coins for amount Rs 13 when the denomination set is Rs1, Rs4, Rs7', () => {
    assert.strictEqual(vendCoins(13, [1, 4, 7]), 4);
  });

  it('Should give 2 coins for amount Rs 3 when the unordered denomination set of Rs2, Rs1 provided', () => {
    assert.strictEqual(vendCoins(3, [2, 1]), 2);
  });

  it('Should give 4 coins for amount Rs 13 when the unordered denomination set of Rs2, Rs1, Rs 7 provided', () => {
    assert.strictEqual(vendCoins(13, [2, 1, 7]), 4);
  });
});

describe('getMaxElement', () => {
  it('Should give 1 when list provided is 1', () => {
    assert.strictEqual(getMaxElement([1]), 1);
  });

  it('Should give 9 when list provided is 1, 9', () => {
    assert.strictEqual(getMaxElement([1, 9]), 9);
  });
  it('Should give 7 when list provided is 7, 1, 2', () => {
    assert.strictEqual(getMaxElement([7, 1, 2]), 7);
  });
});

describe('maxSort', () => {
  it('Should return 1 when a list provided is 1', () => {
    assert.deepStrictEqual(maxSort([1]), [1]);
  });

  it('Should return 1, 2 when a list provided is 2, 1', () => {
    assert.deepStrictEqual(maxSort([2, 1]), [1, 2]);
  });
  it('Should return -7, 1, 4 when a list provided is 1, -7, 4', () => {
    assert.deepStrictEqual(maxSort([1, -7, 4]), [-7, 1, 4]);
  });
});

describe('determineCoinByDenomination', () => {

  it('Rs 1 quantity should be 3 when amount is 3 and set is Rs 1', () => {
    assert.deepStrictEqual(determineCoinByDenomination(3, [1]), { '1': 3 });
  });

  it('Object length should be 2 when amount is 3 and set are Rs 1, Rs 2', () => {
    const actual = Object.keys(determineCoinByDenomination(3, [1, 2])).length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

  it('Rs 1 quantity should be 1 when amount is 3 and set is Rs 1, Rs 2', () => {
    const actual = determineCoinByDenomination(3, [1, 2]);
    const expected = { '1': 1, '2': 1 };
    assert.deepStrictEqual(actual, expected);
  });

  it('Rs 2 quantity should be 1 when amount is 3 and set is Rs 1, Rs 2', () => {
    const actual = determineCoinByDenomination(3, [1, 2]);
    const expected = { '1': 1, '2': 1 };
    assert.deepStrictEqual(actual, expected);
  });

  it('Object length should be 2 when amount is 3 and unordered set of Rs 2, Rs 1', () => {
    const actual = Object.keys(determineCoinByDenomination(5, [2, 1])).length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

  it('Rs 2 quantity should be 2 when amount is 5 and unordered set of Rs 2, Rs 1', () => {
    const actual = determineCoinByDenomination(5, [2, 1]);
    const expected = { '1': 1, '2': 2 };
    assert.deepStrictEqual(actual, expected);
  });
  it('Rs 1 quantity should be 1 when amount is 5 and unordered set of Rs 2, Rs 1', () => {
    const actual = determineCoinByDenomination(5, [2, 1]);
    const expected = { '1': 1, '2': 2 };
    assert.deepStrictEqual(actual, expected);
  });
});