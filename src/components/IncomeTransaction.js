// IncomeTransaction.js
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const formatRupiah = (amount) => 
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        {formatRupiah(incomeTransaction.incomeAmount)}
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
