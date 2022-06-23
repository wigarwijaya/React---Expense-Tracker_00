import react, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Udemy Course",
    amount: 99000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Monitor",
    amount: 2150000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Note 11",
    amount: 2500000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Bracket Monitor",
    amount: 260000,
    date: new Date(2021, 5, 12),
  },
];
const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
