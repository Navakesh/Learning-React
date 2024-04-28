// Write your code here
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import React,{useState} from 'react';


const Expenses=(props) =>{
  const [filteredYear,setFilteredYear]=useState("2023")
  const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
