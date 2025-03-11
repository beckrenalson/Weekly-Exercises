let account = {
    accBalance: 0,
    accDeposit: function(deposit) {
        this.accBalance += deposit;
    },
    accWithdrawal: function(withdraw) {
        this.accBalance -= withdraw;
    },
}

console.log(account.accBalance);
account.accDeposit(100);
console.log(account.accBalance);
account.accWithdrawal(75);
console.log(account.accBalance);