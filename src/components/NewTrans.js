import { useState, useContext } from "react";
import React from "react";
import { GlobalContext } from "../context/globalState";

export default () => {
  const [formData, setFormData] = useState({ amount: 0, text: "" });
  const { insertTransactions } = useContext(GlobalContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };
  const handleClick = () => {
    insertTransactions(formData.text, formData.amount);
  };
  return (
    <>
      <h3>Enter New Transaction</h3>
      <div className="form-input">
        <label htmlFor="text-input">Text</label>
        <input
          name="text"
          value={formData.text}
          id="text-input"
          placeholder="Enter New Text..."
          onChange={handleChange}
        />
      </div>
      <div className="form-input">
        <label htmlFor="amount-input">
          Amount
          <br />
          (negative - expense, positive - income)
        </label>
        <input
          name="amount"
          value={formData.amount}
          id="amount-input"
          placeholder="Enter Amount..."
          onChange={handleChange}
        />
      </div>
      <button className="sub-button" type="button" onClick={handleClick}>
        Add transaction
      </button>
    </>
  );
};
