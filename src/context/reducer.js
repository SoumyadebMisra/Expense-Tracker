import React from "react";

export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload)
      };
    case "INSERT_TRANSACTIONS":
      let arr = [...state.transactions];
      arr.push(action.payload);
      return {
        ...state,
        transactions: arr
      };
    default:
      return state;
  }
};
