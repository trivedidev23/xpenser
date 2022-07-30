import React from "react";
import ExpenseList from "../../Components/ExpenseList";
import TopFold from "../../Components/topfold";
import Total from "../../Components/total expense";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
      <Total list={list} />
    </div>
  );
};

export default Home;
