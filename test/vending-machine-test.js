const vending = require("../src/vending-machine.js")
const test = require("../lib/testing.js");

const vendingTest = function() {
  test.displayHeadline("vendingMachineTest");
  test.assertEquals(vending.vendingMachine(1), 1, "It should return 1 for INR 1");
  test.assertEquals(vending.vendingMachine(2), 2, "It should return 2 for INR 2");
  test.assertEquals(vending.vendingMachine(3), 3, "It should return 3 for INR 3");
}
vendingTest();
