import React from "react";
import Card from "./card";
import "./expenseList.css";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = Array.isArray(list)
    ? list.filter((item) => item.title.includes(query))
    : [];
  const notifySuccess = () => toast.success("Expense Deleted");

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
      />
      {filteredList.length ? (
        filteredList.map((item) => {
          return (
            <Card
              item={item}
              notifySuccess={notifySuccess}
              key={item.createdAt}
            />
          );
        })
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-image"
          />
          <label>Uh oh! Your expense list is Empty.</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
