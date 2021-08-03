import React from 'react';

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
    return (
        <ul className="expenses-list">
            {
                items.length === 0
                    ? <h2 className="expenses-list__fallback">No expenses found.</h2>
                    : (
                        items.map(expense => (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        ))
                    )
            }
        </ul>
    );
};

export default ExpensesList;