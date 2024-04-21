import "./ExpenseItem.css";
function ExpenseItem(props){
    const months=['january',
    'febrauary',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december']
    const month=months[props.date.getMonth()];
    const year=props.date.getFullYear()
    const date = props.date.getDate().toString().padStart(2, '0');

    return(
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{date}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <div className="expense-item__location">{props.location}</div>        
        </div>
    )
}
export default ExpenseItem;