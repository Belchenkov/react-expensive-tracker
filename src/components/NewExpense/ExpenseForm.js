import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const amountChangeHandler = event => setEnteredAmount(event.target.value);
    const dateChangeHandler = event => setEnteredDate(event.target.value);

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle?.trim(),
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        clearFormHandler();
    };

    const clearFormHandler = () => {
        setEnteredTitle('');
        setEnteredAmount(0);
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        type="number"
                        min={0.01}
                        step={0.01}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        onChange={dateChangeHandler}
                        type="date"
                        min="2020-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;