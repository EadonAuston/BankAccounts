
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongAccounts = [];
  let sumOfDeposits = [];
  let sumOfWithdrawals = [];
  let balances = [];

  for (let i = 0; i < array.length; i++) {
    sumOfDeposits.push(0);
    sumOfWithdrawals.push(0);
    balances.push(0);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].withdrawals === undefined) {
      sumOfWithdrawals[i] = 0;
      if (array[i].deposits === undefined) {
        sumOfDeposits[i] = 0;
        balances[i] = 0;
      } else {
        for (let x = 0; x < array[i].deposits.length; x++) {
          sumOfDeposits[i] += array[i].deposits[x]
        }
      }
      balances[i] = sumOfDeposits[i];
    } else if (array[i].deposits === undefined) {
      sumOfDeposits[i] = 0;
      if (array[i].withdrawals === undefined) {
        sumOfWithdrawals[i] = 0;
        balances[i] = 0;
      } else {
        for (let x = 0; x < array[i].withdrawals.length; x++) {
          sumOfWithdrawals[i] -= array[i].withdrawals[x]
        }
      }
      balances[i] = sumOfDeposits[i];
    } else {
      for (let x = 0; x < array[i].deposits.length; x++) {
        sumOfDeposits[i] += array[i].deposits[x]
      }
      for (let x = 0; x < array[i].withdrawals.length; x++) {
        sumOfWithdrawals[i] -= array[i].withdrawals[x]
      }
    }
    
    balances[i] = sumOfDeposits[i] + sumOfWithdrawals[i];
  }

  for (let i = 0; i < array.length; i++) {
    if (balances[i] !== array[i].balance) {
      wrongAccounts.push(array[i]);
    }
  }
  console.log(`Wrong Accounts: ${wrongAccounts}`);
  console.log(`Deposits: ${sumOfDeposits}`);
  console.log(`Withdrawals: ${sumOfWithdrawals}`); 
  return wrongAccounts;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
