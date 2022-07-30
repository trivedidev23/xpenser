import React from "react";
import "./total-expense.css";

const Total = ({ list }) => {
  const totalPrice = list
    .map((i) => i.amount)
    .reduce((total, item) => {
      return total + item;
    }, 0);

  return (
    <>
      {list.length && (
        <div
          className="card"
          style={{
            borderBottom: "3px solid #001F3F",
            borderTop: "1px solid #001F3F",
            borderRadius: "18px 18px 0px 0px",
            marginTop: "50px",
          }}
        >
          <div className="card-info">
            <label className="card-title">Total</label>
          </div>
          <div className="card-right">
            <div>
              <label className="card-amount">₹ {totalPrice}</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Total;
