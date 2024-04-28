// Write your code at relevant places in the code below
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App=() =>{
  const expenses = [
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
    { id: "4", date: new Date(2024, 1, 14), title: "Laptop", price: 200 },
  ];
  const[newexpenses,setExpense]=useState(expenses)
  const addExpenseHandler=(expense)=>{
    console.log(expense)
    setExpense((prevExpenseData)=>{
      return [expense,...prevExpenseData]
    })
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={newexpenses} />
    </div>
  );
}

export default App;
