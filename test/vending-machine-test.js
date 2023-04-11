const vending = require("../src/vending-machine.js")
const test = require("../lib/testing.js");

const vendingTest = function() {
  test.displayHeadline("vendingMachineTest");
  test.assertEquals(vending.vendCoins(1), 1, "It should give 1 coin for INR 1");
  test.assertEquals(vending.vendCoins(2), 1, "It should give 1 coin for INR 2");
  test.assertEquals(vending.vendCoins(3), 2, "It should give 2 coin for INR 3");
  test.assertEquals(vending.vendCoins(4), 2, "It should give 2 coin for INR 4");
  test.assertEquals(vending.vendCoins(5), 1, "It should give 1 coin for INR 3");
}
vendingTest();
