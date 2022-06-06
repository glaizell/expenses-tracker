import React, { useState } from 'react';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import './App.css';
import ExpensesFilter from './components/ExpensesFilter';

function App() {
  const [expenses, setExpenses] = useState([]);

  const [filteredYear, setFilteredYear] = React.useState('2022');

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='app'>
      <h1>Expenses Tracker</h1>

      <ExpensesForm expenses={expenses} setExpenses={setExpenses} />
      <ExpensesFilter
        expenses={expenses}
        filteredYear={filteredYear}
        setFilteredYear={setFilteredYear}
      />
      <ExpensesList expenses={filteredExpenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
