// Balance.js
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0);
  const totalExpenses = expenseAmounts.reduce((acc, item) => (acc += item), 0);

  const formatRupiah = (amount) => 
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>{formatRupiah(totalIncome - totalExpenses)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>{formatRupiah(totalIncome)}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>{formatRupiah(totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
