import React, { useState } from "react";
import Card from "../UI/Cards";
import "./Expenses.css";
import "./ExpensesFilter"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props)=> {
   const [filteredYear, setFilteredYear] = useState('All');
   const filterChangeHandler = selectedYear=>{
     setFilteredYear(selectedYear);

   }

   const filteredExpenses = props.items.filter(expense =>{
    if(filteredYear === "All")return expense
    return expense.date.getFullYear().toString() === filteredYear;
   });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
