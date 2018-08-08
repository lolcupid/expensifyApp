import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseInput from './ExpenseInput';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseInput />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
