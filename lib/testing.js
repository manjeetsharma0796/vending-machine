const boldUnderline = function(text) {
  return "\033[1;4m" + text + "\033[0m";
}

const highlighterBlue = function(text) {
  return "\033[38;5;123m" + text + "\033[0m";
} 

const highlighterYellow = function(text) {
  return "\033[38;5;226m" + text + "\033[0m";
} 

let totalAssertions = 0;
let failedAssertions = 0;

const formatExpectationMismatch = function(actual, expected) {                                       //--------------------1
  let message = "";
  message += "\tExpected: " + expected;
  message += "\n";
  message += "\t  Actual: " + actual;

  return message;
}

const displayHeadline = function(line) {                                                 //----------------------2
  console.log(boldUnderline(highlighterBlue(line)));
}

const formatTestResult = function(result, actual, expected, message) {                    //  ------------------3
  const icon = result ? "✅" : "❌";
  const expectationMismatchedMessage = formatExpectationMismatch(actual, expected);

  const line1 = icon + " " + message;
  const line2 = result ? "" : "\n" + expectationMismatchedMessage;

  return line1 + line2;
}

const updateAssertionCount = function(result) {                                         //---------------------4
  totalAssertions += 1;
  failedAssertions += result ? 0 : 1;
}

const getTotalAssertions = function() {                                                 //---------------------5
  return totalAssertions;
}

const getPassedAssertions = function() {                                                //----------------------6
  return totalAssertions - failedAssertions;
}

function assertEquals(actual, expected, message) {                                      //----------------------7
  const result = expected === actual;

  updateAssertionCount(result);
  console.log(formatTestResult(result, actual, expected, message));
}
const assertAlmostEquals = function(actual, expected, message) {                         //----------------------8
  const result = Math.abs(actual - expected) < 0.01;

  updateAssertionCount(result);
  console.log(formatTestResult(result, actual, expected, message));
}

const displaySummary = function() {                                                     //-----------------------9                
  let summary = "";

  summary += "\n";
  summary += "Summary: ";
  summary += getPassedAssertions() + " / " + getTotalAssertions();
  summary += " passed ";

  console.log(highlighterYellow(summary));
}

//===================================================== TEST FRAMEWORK FOR ARRAY====================================================================

function testingArray(actual, expected, message) {
  const result = compareArrayElements(actual, expected);

  updateAssertionCount(result);
  console.log(formatTestResult(result, actual, expected, message));

}

// Compare elements of arrays=======================================================================================

function compareArrayElements(array1, array2) {
  // if (array1.length !== array2.length) {
  //   return false;


  // for ( let index = 0; index < array1.length; index++) {
  //   if (array1[index] !== array2[index]) {
  //     return false;
  //   };
  // };
  if (array1.toString() === array2.toString()) {
    return true;
  }

  return false;
};

function testCompareArrayElements() {
  showHeadline("Testing compareArrayElements");

  testing(true, compareArrayElements([1, 2, 99, 1], [1, 2, 99, 1]), "For same array containing positive numbers");
  testing(true, compareArrayElements([-1, -2, -9], [-1, -2, -9]), "For same array contaning negative numbers");
  testing(true, compareArrayElements([-1, -2, -9, 1, 3], [-1, -2, -9, 1, 3]), "For same array containing both positive & negative numbers");
  testing(false, compareArrayElements([], [23]), "For not same array");
}

exports.boldUnderline = boldUnderline;
exports.highlighterBlue = highlighterBlue;
exports.highlighterYellow = highlighterYellow;
exports.assertEquals = assertEquals; 
exports.assertAlmostEqualsw = assertAlmostEquals; 
exports.testingArray = testingArray; 
exports.displayHeadline = displayHeadline;
exports.displaySummary = displaySummary;
