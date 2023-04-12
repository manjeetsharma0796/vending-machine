const vending = require("../src/vending-machine.js")
const test = require("../lib/testing.js");

const vendingTest = function() {
  test.displayHeadline("vendingMachineTest");
  test.assertEquals(vending.vendCoins(0, [1]), 0 , "Should give 0 coin for amount Rs 0 when the denomination set is Rs1");
  test.assertEquals(vending.vendCoins(0, [1, 2]), 0 , "Should give 0 coin for amount Rs 0 when the denomination set is Rs1, Rs2");
  test.assertEquals(vending.vendCoins(0, [1, 2, 5]), 0 , "Should give 0 coin for amount Rs 0 when the denomination set is Rs1 Rs2 Rs5");
  test.assertEquals(vending.vendCoins(1, [1]), 1 , "Should give 1 coin for amount Rs 1 when the denomination set is Rs1");
  test.assertEquals(vending.vendCoins(2, [1]), 2, "Should give 2 coin for amount Rs 2 when the denomination set is Rs1");
  test.assertEquals(vending.vendCoins(3, [1]), 3, "Should give 3 coin for amount Rs 3 when the denomination set is Rs1");
  test.assertEquals(vending.vendCoins(1, [2]), 0, "Should give 0 coin for amount Rs 1 when the denomination set is Rs2");
  test.assertEquals(vending.vendCoins(2, [2]), 1, "Should give 1 coin for amount Rs 2 when the denomination set is Rs2");
  test.assertEquals(vending.vendCoins(5, [1, 2]), 3, "Should give 3 coin for amount Rs 5 when the denomination set is Rs1, Rs2");
  test.assertEquals(vending.vendCoins(13, [1, 2, 5]), 4, "Should give 4 coin for amount Rs 13 when the denomination set is Rs1, Rs2, Rs5");
  test.assertEquals(vending.vendCoins(13, [1, 2, 10]), 3, "Should give 3 coin for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10");
  test.assertEquals(vending.vendCoins(13, [1, 2, 10]), 3, "Should give 3 coin for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10");
  test.assertEquals(vending.vendCoins(18, [1, 2, 5, 10]), 4, "Should give 3 coin for amount Rs 18 when the denomination set is Rs1, Rs2, Rs5, Rs10");
}
vendingTest();
test.displaySummary();
