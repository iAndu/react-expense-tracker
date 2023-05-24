import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

/**
 * @callback addExpenseCallback
 * @param {{id: string, title: string, amount: number, date: Date}} expense
 */

/**
 * 
 * @param {Object} props 
 * @param {addExpenseCallback} props.onAddExpense
 * @returns 
 */
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const addExpenseClickHandler = () => setShowForm(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const hideFormHandler = () => setShowForm(false);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={hideFormHandler}
        />
      ) : (
        <button onClick={addExpenseClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
