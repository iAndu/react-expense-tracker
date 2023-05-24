import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

/**
 *
 * @param {Object} props
 * @param {Object[]} props.items
 * @param {string} props.items.id
 * @param {string} props.items.title
 * @param {number} props.items.amount
 * @param {Date} props.items.date
 * @returns
 */
const ExpensesList = (props) => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
