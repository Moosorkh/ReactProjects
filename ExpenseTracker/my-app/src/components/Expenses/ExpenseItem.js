import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";

const ExpenseItem = (props)=> {

  console.log('ExpenseItem evaluated by React');


  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
}
export default ExpenseItem;
