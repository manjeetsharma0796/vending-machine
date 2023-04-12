const vending = require("../src/vending-machine.js")
const test = require("../lib/testing.js");

const vendingTest = function() {
  test.displayHeadline("vendingMachineTest");
  test.assertEquals(vending.vendCoins(1, [1]), 1 , "It should give 1 coin for INR 1 when the set is Rs1");
  test.assertEquals(vending.vendCoins(2, [1]), 2, "It should give 2 coin for INR 2 when the set is Rs1");
  test.assertEquals(vending.vendCoins(3, [1]), 3, "It should give 3 coin for INR 3 when the set is Rs1");
  test.assertEquals(vending.vendCoins(1, [2]), 0, "It should give 0 coin for INR 1 when the set is Rs2");
  test.assertEquals(vending.vendCoins(2, [2]), 1, "It should give 1 coin for INR 2 when the set is Rs2");
  test.assertEquals(vending.vendCoins(5, [1, 2]), 3, "It should give 3 coin for INR 5 when the set is Rs1, Rs2");
  test.assertEquals(vending.vendCoins(13, [1, 2, 5]), 4, "It should give 4 coin for INR 13 when the set is Rs1, Rs2, Rs5");
  test.assertEquals(vending.vendCoins(13, [1, 2, 10]), 3, "It should give 3 coin for INR 13 when the set is Rs1, Rs2, Rs10");
  test.assertEquals(vending.vendCoins(13, [1, 2, 10]), 3, "It should give 3 coin for INR 13 when the set is Rs1, Rs2, Rs10");
  test.assertEquals(vending.vendCoins(18, [1, 2, 5, 10]), 4, "It should give 3 coin for INR 18 when the set is Rs1, Rs2, Rs5, Rs10");
}
vendingTest();
