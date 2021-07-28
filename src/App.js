import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 6, 14) },
        { title: 'New TV', amount: 124.07, date: new Date(2021, 5, 4) },
        { title: 'Toilet Paper', amount: 34.57, date: new Date(2021, 4, 5) },
        { title: 'New Desk (Wooden)', amount: 145.52, date: new Date(2021, 3, 8) },
    ];

    const addExpenseHandler = expense => {
        console.log(expense, 'App');
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
