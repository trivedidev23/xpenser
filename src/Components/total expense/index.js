import React from "react";
import "./total-expense.css";

const Total = ({ list }) => {
  const totalPrice = list
    .map((i) => i.amount)
    .reduce((total, item) => {
      return total + item;
    }, 0);

  return (
    <div className="card">
      <div className="card-info">
        <label className="card-title">Total</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {totalPrice}</label>
        </div>
      </div>
    </div>
  );
};

export default Total;
