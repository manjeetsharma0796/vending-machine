const getMaxElement = function (list) {
  let max = list[0];

  for (let value of list) {
    max = Math.max(max, value);
  }

  return max;
};

const maxSort = function(list) {
  let unsorted = list.slice(0);
  let sorted = [];

  while (unsorted.length > 0) {
    let max = getMaxElement(unsorted);

    unsorted.splice(unsorted.indexOf(max), 1);
    sorted.unshift(max);
  }

  return sorted;
};

module.exports = {
  getMaxElement,
  maxSort
};