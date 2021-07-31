import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2020, 6, 14) },
    { id: 'e2', title: 'New TV', amount: 124.07, date: new Date(2021, 5, 4) },
    { id: 'e3', title: 'Toilet Paper', amount: 34.57, date: new Date(2029, 4, 5) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 145.52, date: new Date(2021, 3, 8) },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [
                expense,
                ...expenses
            ]
        });
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
