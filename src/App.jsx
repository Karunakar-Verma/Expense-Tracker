import { useState } from "react";
import AddTrans from "./Components/addTrans";
import ShowTransaction from "./Components/showTransaction";
import PieChart from "./Components/chart";

function App() {
  const [expenses, setExpenses] = useState([]);
  const addTransaction = (transaction)=>{
    setExpenses((preExpenses)=>[...preExpenses,transaction])

  }
  return (
    <div className="flex justify-center items-start h-screen space-x-80">
      <div className="flex flex-col w-1/4 border border-[1px] p-4 justify-center items-center">
        <h1 className="font-bold text-center mb-4">Expense Tracker</h1>
        <AddTrans addTransaction = {addTransaction}/>
        <ShowTransaction expenses = {expenses}/>
      </div>

      <div className="flex flex-col w-2/4 border border-[1px] p-4 m-10 justify-center items-center">
        <h1 className="font-bold m-5">Expense Summary</h1>
        <PieChart expenses={expenses}/>
        
      </div>
    </div>
  );
}

export default App;
