import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export default () => {
  const { transactions } = useContext(GlobalContext);
  const totalBal = transactions
    .map((t) => t.amount)
    .reduce((prev, cur) => prev + cur, 0);
  const income = transactions
    .map((t) => t.amount)
    .filter((a) => a > 0)
    .reduce((prev, cur) => prev + cur, 0);
  const expense = transactions
    .map((t) => t.amount)
    .filter((a) => a < 0)
    .reduce((prev, cur) => prev + cur, 0);
  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="balance-txt">Your Balance</div>
      <div className="bal">₹ {totalBal}</div>
      <div className="tot-rec">
        <div className="rec-card income-card">
          <div className="rec-title">INCOME</div>
          <div className="income">+ ₹{income}</div>
        </div>
        <div className="rec-card">
          <div className="rec-title">EXPENSE</div>
          <div className="expenses">- ₹{Math.abs(expense)}</div>
        </div>
      </div>
    </>
  );
};
