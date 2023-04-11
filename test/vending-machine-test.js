const vending = require("../src/vending-machine.js")
const test = require("../lib/testing.js");

const vendingTest = function() {
  test.displayHeadline("vendingMachineTest");
  test.assertEquals(vending.vendingMachine(), true, "Failing a test");
  test.assertEquals(vending.vendingMachine(), false, "Passing a test");
}

vendingTest();
