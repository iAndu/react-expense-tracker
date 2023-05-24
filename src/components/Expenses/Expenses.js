import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == selectedYear
  );

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          selected={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
