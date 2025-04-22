import { useEffect, useState } from 'react'
import './App.css'

function BankAccount() {
  const [balance, setBalance] = useState(() => {
    // We'll load initial balance from localStorage here
    return parseFloat(localStorage.getItem("bankBalance") || "1000.00");
  });
  const [amount, setAmount] = useState("");
  
  // Add your useEffect hook here to save balance to localStorage
  useEffect(() => {
    localStorage.setItem("bankBalance", balance.toString());
  }, [balance]);
  
  const handleDeposit = () => {
    if (amount && !isNaN(amount)) {
      setBalance(prevBalance => prevBalance + parseFloat(amount));
      setAmount("");
    }
  };
  
  const handleWithdrawal = () => {
    if (amount && !isNaN(amount)) {
      const withdrawal = parseFloat(amount);
      
      if (withdrawal <= balance) {
        setBalance(prevBalance => prevBalance - withdrawal);
        setAmount("");
      } else {
        alert("Insufficient funds! Cannot withdraw more than your balance.");
      }
    }
  };
  
  return (
    <div className="bank-account">
      <h2>Your Account Balance</h2>
      <div className="balance-display">
        ${balance.toFixed(2)}
      </div>
      
      <div className="transaction-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          min="0"
          step="0.01"
        />
        
        <div className="transaction-buttons">
          <button onClick={handleDeposit} className="deposit-btn">
            Deposit
          </button>
          <button onClick={handleWithdrawal} className="withdraw-btn">
            Withdraw
          </button>
        </div>
      </div>
      
      <p className="persistence-note">
        Your balance will be saved even if you close the browser!
      </p>
    </div>
  );
}

export default BankAccount
