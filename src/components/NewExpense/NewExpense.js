import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = data => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;