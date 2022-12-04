import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "Toilet paper", amount: 150.0, date: new Date(2021, 1, 5) },
  { title: "Wooden work", amount: 601.0, date: new Date(2020, 4, 12) },
  { title: "Manufacturing", amount: 300.0, date: new Date(2022, 6, 1) },
  ,
  { title: "Medical care", amount: 425.0, date: new Date(2020, 1, 5) },
];

const App = ()=> {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses]
    })

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
