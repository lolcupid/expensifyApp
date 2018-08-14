import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseInput from './ExpenseInput';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseInput />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
