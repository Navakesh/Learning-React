import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
const ExpensesList=(props)=>{
    if(props.items.length===0){
        return(<h2 className="expenses-List__fallback">No data</h2>)
    }
    return(
        <ul className="expenses-List">
            {props.items.map((item) => {
                return(
                    <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        price={item.price}
                    />
                )
            })}
        </ul>
    )
}
export default ExpensesList;