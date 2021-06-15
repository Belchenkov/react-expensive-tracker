import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const Expenses = ({ items }) => {
    return (
        <Card className="expenses">
            {
                items && items.map(e => (
                    <ExpenseItem
                        key={e.date}
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                    />
                ))
            }
        < /Card>
    );
};

export default Expenses;