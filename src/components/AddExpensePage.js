import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => (
  <div>
    <div className='summary_layout'>
      <div className='container'>
        <h2 className='summary_layout__title'>This is from my add expense component</h2>
      </div>
    </div>
    <div className='container'>
      <ExpenseForm onSubmitChange={(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push('/');
      }} />
    </div>
  </div>
);

export default connect()(AddExpensePage);
