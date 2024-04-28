// Write your code here
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
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
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
}
export default Expenses;
