// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    arr.push(0)
  }
 
  for (let i = 0; i < array.length; i++) {
    if (array[i].withdrawals !== undefined) {
      for (let x = 0; x < array[i].withdrawals.length; x++) {
      arr[i] += array[i].withdrawals[x];
    } 
  } else {
      arr[i] = 0;
  }
    //   for (let i = 0; i < array[i].withdrawals.length; i++) {
    //     if (array[i].withdrawals !== undefined) {
    //       arr[i] += array[i].withdrawals;
    //   } else {
    //     i++;
    //   }
    // }
   
  }

  return arr;

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
