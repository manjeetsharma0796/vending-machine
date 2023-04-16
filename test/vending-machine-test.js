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
  const it = function (testName, testData) {
    assertEquals(testData.expected, testData.actual, testName);
  };

  displayHeadline("\n" + "testVendCoins");

  it("Should give 0 coins for amount Rs 0 when the denomination set is Rs1", {
    actual: vendCoins(0, [1]),
    expected: 0
  });

  it("Should give 1 coins for amount Rs 1 when the denomination set is Rs1", {
    actual: vendCoins(1, [1]),
    expected: 1
  });

  it("Should give 3 coins for amount Rs 5 when the denomination set is Rs1, Rs2", {
    actual: vendCoins(5, [1, 2]), 
    expected: 3
  });

  it("Should give 4 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs5", {
    actual: vendCoins(13, [1, 2, 5]), 
    expected: 4
  });

  it("Should give 3 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10", {
    actual: vendCoins(13, [1, 2, 10]), 
    expected: 3
  });

  it("Should give 3 coins for amount Rs 13 when the denomination set is Rs1, Rs2, Rs10", {
    actual: vendCoins(13, [1, 2, 10]), 
    expected: 3
  });

  it("Should give 3 coins for amount Rs 18 when the denomination set is Rs1, Rs2, Rs5, Rs10", {
    actual: vendCoins(18, [1, 2, 5, 10]), 
    expected: 4
  });

  it("Should give 6 coins for amount Rs 13 when the denomination set is Rs1, Rs4, Rs7", {
    actual: vendCoins(13, [1, 4, 7]), 
    expected: 4
  });

  it("Should give 2 coins for amount Rs 3 when the unordered denomination set of Rs2, Rs1 provided", {
    actual: vendCoins(3, [2, 1]), 
    expected: 2
  });

  it("Should give 4 coins for amount Rs 13 when the unordered denomination set of Rs2, Rs1, Rs 7 provided", {
    actual: vendCoins(13, [2, 1, 7]), 
    expected: 4
  });
}

const testGetMaxElement = function() {
  const it = function (testName, testData) {
    assertEquals(testData.expected, testData.actual, testName);
  };
  displayHeadline("\n" + "getMaxElement");

  it("Should give 1 when list provided is 1", {
    actual: getMaxElement([1]), 
    expected: 1 
  });

  it("Should give 9 when list provided is 1, 9", {
    actual: getMaxElement([1, 9]), 
    expected: 9
  });

  it("Should give 7 when list provided is 7, 1, 2", {
    actual: getMaxElement([7, 1, 2]),
    expected: 7
  });
}

const testMaxSort = function() {
  const it = function (testName, testData) {
    assertArray(testData.expected, testData.actual, testName);
  };
  displayHeadline("\n" + "maxSort");

  it("Should return 1 when a list provided is 1", {
    actual: maxSort([1]), 
    expected: [1] 
  });

  it("Should return 1, 2 when a list provided is 2, 1", {
    actual: maxSort([2, 1]), 
    expected: [1, 2] 
  });

  it("Should return -7, 1, 4 when a list provided is 1, -7, 4", {
    actual: maxSort([1, -7, 4]), 
    expected: [-7, 1, 4] 
  });

}

const testDetermineCoinByDenomination = function() {
  displayHeadline("\n" + "determineCoinByDenomination");
  it("Object length should be 1 when amount is 3 and set is Rs 1", {
    actual: Object.keys(determineCoinByDenomination(3, [1])).length, 
    expected: 1
  })
  it("Rs 1 quantity should be 3 when amount is 3 and set is Rs 1", {
    actual: determineCoinByDenomination(3, [1])[1],
    expected: 3 
  })

  it("Object length should be 2 when amount is 3 and set are Rs 1, Rs 2", {
    actual: Object.keys(determineCoinByDenomination(3, [1, 2])).length, 
    expected: 2
  })

  it("Rs 1 quantity should be 1 when amount is 3 and set is Rs 1, Rs 2", {
    actual: determineCoinByDenomination(3, [1, 2])[1],
    expected: 1 
  })

  it("Rs 2 quantity should be 1 when amount is 3 and set is Rs 1, Rs 2", {
    actual: determineCoinByDenomination(3, [1, 2])[2], 
    expected: 1 
  })

  it("Object length should be 2 when amount is 3 and unordered set of Rs 2, Rs 1", {
    Object.keys(determineCoinByDenomination(5, [2, 1])).length, 2, )

  it("Rs 2 quantity should be 2 when amount is 5 and unordered set of Rs 2, Rs 1", {
    determineCoinByDenomination(5, [2, 1])[2], 2, )
  it("Rs 1 quantity should be 1 when amount is 5 and unordered set of Rs 2, Rs 1", {
    determineCoinByDenomination(5, [2, 1])[1], 1, )
  }

    const tests = function() {
      testVendCoins();
      testGetMaxElement();
      testMaxSort();
      testDetermineCoinByDenomination();
      displaySummary();

    }

    tests();
