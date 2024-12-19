import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({expenses}) => {
    const data = {
        labels:expenses.map(expense=>expense.des),
        datasets:[{
            data:expenses.map(expenses => expenses.amount),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },],
    }
  return (
    <div>
        <Pie data = {data}/>
    </div>
  )
}

export default PieChart