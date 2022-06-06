import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ExpensesForm.module.css';

const ExpensesForm = ({ expenses, setExpenses }) => {
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredItems, setEnteredItems] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const saveExpensesHandler = (expense) => {
    const expenseData = {
      ...expense,
    };
    addExpensesHandler(expenseData);
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expensesData = {
      id: uuidv4(),
      date: new Date(enteredDate),
      items: enteredItems,
      amount: +enteredAmount,
      quantity: +enteredQuantity,
    };
    saveExpensesHandler(expensesData);
    setEnteredAmount('');
    setEnteredItems('');
    setEnteredDate('');
    setEnteredQuantity('');
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };
  const handleItemsChange = (e) => {
    setEnteredItems(e.target.value);
  };
  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setEnteredQuantity(e.target.value);
  };

  const startEditExpensesHandler = () => {
    setIsEditing(true);
  };
  const stopEditExpensesHandler = () => {
    setIsEditing(false);
    setEnteredDate('');
    setEnteredItems('');
    setEnteredAmount('');
    setEnteredQuantity('');
  };
  return (
    <div className={styles.expensesForm}>
      <div className={styles.btnAddNewContainter}>
        {!isEditing && (
          <button
            className={styles.btnAddNew}
            onClick={startEditExpensesHandler}
          >
            Add new expenses
          </button>
        )}
      </div>

      {isEditing && (
        <form action='' onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.expensesData}>
              <label htmlFor='date'>Date</label>
              <input
                id='date'
                type='date'
                min='2019-01-01'
                max='2022-12-31'
                value={enteredDate}
                onChange={handleDateChange}
              />
            </div>
            <div className={styles.expensesData}>
              <label htmlFor='amount'>Amount</label>
              <input
                id='amount'
                type='number'
                min='0.1'
                max='999999.99'
                step='0.1'
                value={enteredAmount}
                onChange={handleAmountChange}
              />
            </div>
            <div className={styles.expensesData}>
              <label htmlFor='items'>Items</label>
              <input
                id='items'
                type='text'
                value={enteredItems}
                onChange={handleItemsChange}
                autocomplete='off'
              />
            </div>
            <div className={styles.expensesData}>
              <label htmlFor='quantity'>Quantity</label>
              <input
                id='quantity'
                type='number'
                value={enteredQuantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btnAdd} type='submit'>
              Add expenses
            </button>
            <button
              className={styles.btnCancel}
              onClick={stopEditExpensesHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpensesForm;
