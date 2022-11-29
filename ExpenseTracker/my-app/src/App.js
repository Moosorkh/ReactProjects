import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = ()=> {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Toilet paper", amount: 150.00, date: new Date(2021, 1, 5) },
    { title: "Wooden work", amount: 601.00, date: new Date(2020, 4, 12) },
    { title: "Manufacturing", amount: 300.00, date: new Date(2022, 6, 1) },
  ];

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }

  // return React.createElement('div', {}, React.createElement('h2', {}, 'Let\'s get started!'), React.createElement(Expenses, {items: expenses}));
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses  items = {expenses}/>
    </div>
  );
 }

export default App;
