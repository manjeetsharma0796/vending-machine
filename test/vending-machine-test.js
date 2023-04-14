const vendingMachine = require("../src/vending-machine.js")
const utility = require("../src/utility.js")
const test = require("../lib/testing.js");

const displayHeadline = test.displayHeadline;
const assertEquals = test.assertEquals;
const assertArray = test.assertArray;
const displaySummary = test.displaySummary;
const maxSort = utility.maxSort;
const getMaxElement = utility.getMaxElement;
const vendCoins = vendingMachine.vendCoins;
const determineCoinByDenomination = vendingMachine.determineCoinByDenomination;

const testVendCoins = function() {
  displayHeadline("\n" + "testVendCoins");
  let message = "Should give 0 coins for amount Rs 0 when the denomination set is Rs1";
  assertEquals(vendCoins(0, [1]), 0 , message);

  message = "Should give 1 coins for amount Rs 1 when the denomination set is Rs1";
  assertEquals(vendCoins(1, [1]), 1 ,message);

  message = "Should give 3 coins for amount Rs 5 when the denomination set is Rs1, Rs2";
  assertEquals(vendCoins(5, [1, 2]), 3, message);

  message = "Should give 4 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs5";
  assertEquals(vendCoins(13, [1, 2, 5]), 4, message);

  message = "Should give 3 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10";
  assertEquals(vendCoins(13, [1, 2, 10]), 3, message);

  message = "Should give 3 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10"; 
  assertEquals(vendCoins(13, [1, 2, 10]), 3, message);

  message = "Should give 3 coins for amount Rs 18 when the denomination set is Rs1, Rs2, Rs5, Rs10"; 
  assertEquals(vendCoins(18, [1, 2, 5, 10]), 4, message);

  message = "Should give 6 coins for amount Rs 13 when the denomination set is Rs1, Rs4, Rs7";
  assertEquals(vendCoins(13, [1, 4, 7]), 4, message);

  message = "Should give 2 coins for amount Rs 3 when the unordered denomination set of Rs2, Rs1 provided";
  assertEquals(vendCoins(3, [2, 1]), 2, message);

  message = "Should give 4 coins for amount Rs 13 when the unordered denomination set of Rs2, Rs1, Rs 7 provided";
  assertEquals(vendCoins(13, [2, 1, 7]), 4, message);
}

const testGetMaxElement = function() {
  displayHeadline("\n" + "getMaxElement");
  assertEquals(getMaxElement([1]), 1, "Should give 1 when list provided is 1");
  assertEquals(getMaxElement([1, 9]), 9, "Should give 9 when list provided is 1, 9");
  assertEquals(getMaxElement([7, 1, 2]), 7, "Should give 7 when list provided is 7, 1, 2");
}

const testMaxSort = function() {
  displayHeadline("\n" + "maxSort");
  assertArray(maxSort([1]), [1], "Should return 1 when a list provided is 1");
  assertArray(maxSort([2, 1]), [1, 2], "Should return 1, 2 when a list provided is 2, 1");
  assertArray(maxSort([2, 3, 1]), [1, 2, 3], "Should return 1, 2, 3 when a list proided is 2, 3, 1");
  assertArray(maxSort([1, 7, 4]), [1, 4, 7], "Should return 1, 4, 7 when a list provided is 1, 7, 4");
  assertArray(maxSort([1, -7, 4]), [-7, 1, 4], "Should return -7, 1, 4 when a list provided is 1, -7, 4");

}

const testDetermineCoinByDenomination = function() {
  displayHeadline("\n" + "determineCoinByDenomination");
  assertEquals(Object.keys(determineCoinByDenomination(3, [1])).length, 1, "Object length should be 1 when amount is 3 and set is Rs 1")
  assertEquals(determineCoinByDenomination(3, [1])[1], 3, "Rs 1 quantity should be 3 when amount is 3 and set is Rs 1")
  assertEquals(Object.keys(determineCoinByDenomination(3, [1, 2])).length, 2, "Object length should be 2 when amount is 3 and set are Rs 1, Rs 2")
  assertEquals(determineCoinByDenomination(3, [1, 2])[1], 1, "Rs 1 quantity should be 1 when amount is 3 and set is Rs 1, Rs 2")
  assertEquals(determineCoinByDenomination(3, [1, 2])[2], 1, "Rs 2 quantity should be 1 when amount is 3 and set is Rs 1, Rs 2")
  assertEquals(Object.keys(determineCoinByDenomination(5, [2, 1])).length, 2, "Object length should be 2 when amount is 3 and unordered set of Rs 2, Rs 1")
  assertEquals(determineCoinByDenomination(5, [2, 1])[2], 2, "Rs 2 quantity should be 2 when amount is 5 and unordered set of Rs 2, Rs 1")
  assertEquals(determineCoinByDenomination(5, [2, 1])[1], 1, "Rs 1 quantity should be 1 when amount is 5 and unordered set of Rs 2, Rs 1")
}

const tests = function() {
  testVendCoins();
  testGetMaxElement();
  testMaxSort();
  testDetermineCoinByDenomination();
  displaySummary();

}

tests();
