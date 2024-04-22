// Write your code here
import "./ExpenseItem.css";
import  ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props){
    
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <div className="expense-item__location">{props.location}</div>        
        </div>
    )
}
export default ExpenseItem;