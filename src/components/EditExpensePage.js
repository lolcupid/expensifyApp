import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

export const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
      <ExpenseForm expense={props.expense} onSubmitChange={(expense) => {
        console.log(expense)
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
      }} />
      <button
        onClick={() => {
          props.dispatch(removeExpense(props.expense))
          props.history.push('/');
        }}
      >
        Remove
      </button>
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
