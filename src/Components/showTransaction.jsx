import React from "react";
import { IoAnalyticsOutline } from "react-icons/io5";

const ShowTransaction = ({ expenses }) => {
  return (
    <div className="border border-[1px] p-2 mt-4 w-9/12 overflow-x-hidden max-h-80 overflow-y-auto">
      <h2 className="font-bold mb-2 text-red-600">Transactions</h2>
      <div>
        {expenses.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className="border-b w-80 py-2">
                <p>
                  <strong>Amount:</strong> ${expense.amount}
                </p>
                <p>
                  <strong>Description:</strong> {expense.des}
                </p>
                <div>
                <p className="flex flex-row space-x-16">
                  <strong>Type:</strong> {expense.transactionType}{" "}
                  <IoAnalyticsOutline
                    style={{
                      color: expense.transactionType === "Expense" ? "red" : "green",
                    }}
                  />
                </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShowTransaction;
