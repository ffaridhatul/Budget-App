// ExpenseTransaction.js
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const formatRupiah = (amount) => 
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        {formatRupiah(expenseTransaction.expenseAmount)}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
