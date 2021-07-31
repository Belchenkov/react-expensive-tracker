import React, { useState } from "react";

import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses}/>
        </ Card>
    );
};

export default Expenses;