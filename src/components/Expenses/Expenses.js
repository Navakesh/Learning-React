// Write your code here
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import React from 'react';

const Expenses=(props) =>{
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
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
