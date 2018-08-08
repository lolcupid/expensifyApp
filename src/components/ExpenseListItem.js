import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <p>Description: {description}</p>
      <p>Amout: {amount}</p>
      <p>CreatedAt: {createdAt}</p>
      <button
        onClick={() => {
          dispatch(removeExpense({id}))
        }}
      >
        Remove
      </button>
    </div>
  )
}
export default connect()(ExpenseListItem);