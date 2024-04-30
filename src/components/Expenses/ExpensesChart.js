import React from "react";
import Chart from "../Chart/Chart";
function ExpensesChart(props){
    return (
        <Chart chartExpenses={props.chartData} />
    )
}
export default ExpensesChart