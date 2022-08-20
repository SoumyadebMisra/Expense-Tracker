import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export default () => {
  const { transactions, deleteTransactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans) => {
          return (
            <li key={trans.id} className={trans.amount < 0 ? "minus" : "plus"}>
              {trans.text}{" "}
              <span>
                {trans.amount < 0 ? "-" : "+"}${Math.abs(trans.amount)}
              </span>
              <button
                onClick={() => {
                  deleteTransactions(trans.id);
                }}
                className="delete-btn">
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
