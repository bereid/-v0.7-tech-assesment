const inputString = "417427194451417";
const dictionary = ["94451", "417", "94451417", "4271", "427194451"];

// it's not complete, elements of combinations should be splitted forward with a recursive function

const getCombinations = (string, array) => {
  let combinations = [];

  const splitterFunction = (array) =>
    array.forEach((e, i) => {
      const combination = splitter(string, e).filter((e) => e);
      const joinedWithColon = joinWithColon(combination);
      if (
        isValidCombination(string, array, combination) &&
        !combinations.includes(joinedWithColon)
      ) {
        combinations.push(joinedWithColon);
      }
    });

  splitterFunction(array);

  return combinations;
};

const joinWithColon = (arr) => arr.join(":");

const splitter = (str, delimiter) =>
  str.split(new RegExp("(" + delimiter + ")"));

const allElementReproducedInArray = (array, combination) => {
  let numberOfIncludes = 0;
  combination.forEach((c) => {
    if (array.includes(c)) {
      numberOfIncludes += 1;
    }
  });
  return numberOfIncludes === combination.length;
};

const stringsMatchWithArrayOfStrings = (str, array) => array.join("") === str;

const isValidCombination = (str, array, combination) =>
  stringsMatchWithArrayOfStrings(str, combination) &&
  allElementReproducedInArray(array, combination);

console.log(getCombinations(inputString, dictionary));
