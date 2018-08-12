import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => (
  <div>
    This is from my add expense component
    <ExpenseForm onSubmitChange={(expense) => {
      props.dispatch(startAddExpense(expense))
      props.history.push('/');
    }}/>
  </div>
);

export default connect()(AddExpensePage);
