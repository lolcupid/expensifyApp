import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedList from '../selector/expenses';

export const ExpenseList = (props) => {
  return (
    <div className='container'>
      <div className='list-header'>
        <div className='show-for-desktop'>Expenses</div>
        <div className='show-for-desktop'>Amount</div>
        <div className='show-for-mobile'>Expense</div>
      </div>
      <div className='list-body'>
        {
          props.expenses.length === 0 ? (
            <div className='list-item list-item-error'>
              <span>No Expense</span>
            </div>
          ) : (
              props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
              })
            )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectedList(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList);