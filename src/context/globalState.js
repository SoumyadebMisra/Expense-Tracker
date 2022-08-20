import React, { createContext, useReducer } from "react";
import { reducerFunc } from "./reducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};
//create Context
export const GlobalContext = createContext(initialState);

//export Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const deleteTransactions = (id) => {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id
    });
  };
  const insertTransactions = (text, amount) => {
    let id = 0;
    state.transactions.forEach((t) => {
      id = Math.max(id, t.id);
    });
    const newTransaction = {
      id: id + 1,
      text,
      amount
    };
    dispatch({
      type: "INSERT_TRANSACTIONS",
      payload: newTransaction
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        insertTransactions
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
