
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r', 'a'], ['f', 'y']]) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      for (let x = 0; x < array[i].length; x++) {
        arr.push(array[i][x]);
      }
    } else {
      arr.push(array[i])
    }
  }
  return arr;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
