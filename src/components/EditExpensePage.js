import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => {
  return (
    <div className='list-body'>
      <div className='summary_layout'>
        <div className='container'>
          <h2 className='summary_layout__title'>Edit Expense</h2>
        </div>
      </div>
      <div className='container'>
        <ExpenseForm expense={props.expense} onSubmitChange={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
        }} />
        <button className='btn btn-secondary'
          onClick={() => {
            props.dispatch(startRemoveExpense(props.expense.id))
            props.history.push('/');
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);
// export default EditExpensePage;
