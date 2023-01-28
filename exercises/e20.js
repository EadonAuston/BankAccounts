
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let arr1 = [];
  let arr2 = [];
  let bad = [];

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
    if (array[i][x] === 'a') {
      arr1.push(array[i]);
      bad.push(i)
    }


  }
 

  
}


var missing = [];
for (var i = 0; i < array.length; i++) {
  var found = false;
  for (var j = 0; j < bad.length; j++) {
    if (bad[j] === i) {
      found = true;
      break;
    }
  }
  if (!found) {
    missing.push(i);
  }
}

for (let i = 0; i < missing.length; i++) {
  arr2.push(array[missing[i]])
}


let answer = [];
answer[0] = arr1;
answer[1] = arr2;

console.log(arr1)
console.log(arr2)
console.log(bad)
console.log(answer)
return answer


}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
