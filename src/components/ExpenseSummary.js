import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expenseSelector from '../selector/expenses';
import expenseSelectorTotal from '../selector/expense-total';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedexpenseTotal = numeral(expenseTotal).format('$0,0.00');
  return (
    <div className='summary_layout'>
      <div className='container'>
        <h2 className='summary_layout__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedexpenseTotal}</span></h2>
        <div className='summary_layout__action'>
          <Link className='btn' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = expenseSelector(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: expenseSelectorTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);