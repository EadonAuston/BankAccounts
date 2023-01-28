
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    arr.push(0)
  }
  let answerArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits === undefined) {
      arr[i] = 0;
    } else {
        for (let x = 0; x < array[i].deposits.length; x++) {
          console.log(array[i].deposits.length)
        arr[i] += array[i].deposits[x];
        }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
      answerArr.push(array[i])
    }
  } 
 console.log(answerArr)
  return answerArr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
