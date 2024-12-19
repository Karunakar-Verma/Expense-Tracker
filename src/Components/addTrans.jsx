import React, { useState } from "react";

const AddTrans = ({ addTransaction }) => {
  const [amount, setAmount] = useState(0);
  const [des, setDesc] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const desHandler = (e) => {
    setDesc(e.target.value);
  };

  const radioHandler = (e) => {
    setTransactionType(e.target.value);
  };

  const addHandler = () => {
    if (!amount || !des || !transactionType) {
      alert("Please fill all fields before adding a transaction!");
      return;
    }

    const newTransaction = { amount, des, transactionType };

    addTransaction(newTransaction);


    setAmount(0);
    setDesc("");
    setTransactionType("");
  };

  return (
    <div className="flex flex-col m-2 justify-center">
      <div className="border border-[1px] p-2">
        <input
          type="number"
          value={amount} 
          onChange={amountHandler}
          placeholder="Enter amount..."
          className="m-2 outline-none border border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          value={des} 
          onChange={desHandler}
          placeholder="Description"
          className="m-2 outline-none border border-[1px] p-2 rounded-md"
        />
        <div className="m-2 mx-2 p-2">
          <label className="mr-4">
            <input
              type="radio"
              name="options"
              value="Salary"
              checked={transactionType === "Salary"}
              onChange={radioHandler}
            />{" "}
            Salary
          </label>
          <label>
            <input
              type="radio"
              name="options"
              value="Expense"
              checked={transactionType === "Expense"}
              onChange={radioHandler}
            />{" "}
            Expense
          </label>

          <div className="m-5">
            <button
              onClick={addHandler}
              className="border bg-gray-400 p-2 rounded-lg font-bold text-white hover:bg-gray-700"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrans;
