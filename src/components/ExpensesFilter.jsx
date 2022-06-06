import React from 'react';
import styles from './ExpensesFilter.module.css';

const ExpensesFilter = ({ filteredYear, setFilteredYear }) => {
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const selectHandler = (event) => {
    filteredChangeHandler(event.target.value);
  };

  return (
    <div className={styles.filteredSelectedYear}>
      <select
        name=''
        id=''
        value={filteredYear}
        onChange={selectHandler}
        className={styles.selectedYear}
      >
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
