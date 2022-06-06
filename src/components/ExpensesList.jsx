import React from 'react';
import Date from './Date';
import styles from './ExpensesList.module.css';
import { MdOutlineDeleteForever } from 'react-icons/md';

const ExpensesList = ({ expenses, setExpenses }) => {
  const deleteHandler = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  if (expenses.length === 0) {
    return <h2>No expenses found</h2>;
  }
  return (
    <ul className={styles.expensesList}>
      {expenses.map((expense) => (
        <li key={expense.id} className={styles.expenses}>
          <Date date={expense.date} />
          <h3>{expense.items}</h3>
          <p className={styles.quantity}>
            {expense.quantity}
            <span> pcs</span>
          </p>
          <p className={styles.amount}>
            <span>$</span>
            {expense.amount}
          </p>
          <MdOutlineDeleteForever
            className={styles.deleteIcon}
            onClick={() => deleteHandler(expense.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
