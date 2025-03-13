let account = {
    accBalance: 0,
    accDeposit: function(deposit) {
        this.accBalance += deposit;
        console.log("Account deposit: " + deposit);
    },
    accWithdrawal: function(withdraw) {
        this.accBalance -= withdraw;
        console.log("Account withdrawal: " + withdraw);
    },
    logBalance: function() {
        console.log("Account balance: " + account.accBalance)
    }
}

account.logBalance();
account.accDeposit(100);
account.logBalance();
account.accWithdrawal(75);
account.logBalance();