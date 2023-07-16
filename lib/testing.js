const textFormat = function (colorCode, text) {
  return "\033[" + colorCode + "m" + text + "\033[0m";
};

const boldUnderline = function (text) {
  return textFormat("1;4", text);
};

const highlighterBlue = function (text) {
  return textFormat("38;5;123", text);
};

const highlighterYellow = function (text) {
  return textFormat("38;5;226", text);
};

let totalAssertions = 0;
let failedAssertions = 0;

const formatExpectationMismatch = function (actual, expected) {
  let message = "";
  message += "\tExpected: " + expected;
  message += "\n";
  message += "\t  Actual: " + actual;

  return message;
};

const displayHeadline = function (line) {
  console.log(boldUnderline(highlighterBlue(line)));
};

const formatTestResult = function (result, actual, expected, message) {
  const icon = result ? "✅" : "❌";
  const expectationMismatchedMessage = formatExpectationMismatch(actual, expected);

  const line1 = icon + " " + message;
  const line2 = result ? "" : "\n" + expectationMismatchedMessage;

  return line1 + line2;
};

const updateAssertionCount = function (result) {
  totalAssertions += 1;
  failedAssertions += result ? 0 : 1;
};

const getTotalAssertions = function () {
  return totalAssertions;
};

const getPassedAssertions = function () {
  return totalAssertions - failedAssertions;
};

const assertEquals = function (actual, expected, message) {
  const result = expected === actual;

  updateAssertionCount(result);
  message = "\t" + message;
  console.log(formatTestResult(result, actual, expected, message));
};

const assertAlmostEquals = function (actual, expected, message) {
  const result = Math.abs(actual - expected) < 0.01;

  updateAssertionCount(result);
  message = "\t" + message;
  console.log(formatTestResult(result, actual, expected, message));
};

const assertArray = function (actual, expected, message) {
  const result = areArraysEqual(actual, expected);

  updateAssertionCount(result);
  message = "\t" + message;
  console.log(formatTestResult(result, actual, expected, message));
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let index = 0;

  while (index < array1.length) {
    if (array1[index] !== array2[index]) {
      return false;
    };

    index++;
  }

  return true;
};

const displaySummary = function () {
  let summary = "";

  summary += "\n";
  summary += "Summary: ";
  summary += getPassedAssertions() + " / " + getTotalAssertions();
  summary += " passed ";

  console.log(highlighterYellow(summary));
};

exports.boldUnderline = boldUnderline;
exports.highlighterBlue = highlighterBlue;
exports.highlighterYellow = highlighterYellow;
exports.assertEquals = assertEquals;
exports.assertAlmostEqual = assertAlmostEquals;
exports.assertArray = assertArray;
exports.displayHeadline = displayHeadline;
exports.displaySummary = displaySummary;
