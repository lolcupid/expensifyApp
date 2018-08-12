import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import expenseSelector from '../selector/expenses';
import expenseSelectorTotal from '../selector/expense-total';

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedexpenseTotal = numeral(expenseTotal).format('$0,0.00');
  return (
    <div>
      <h2>Viewing {expenseCount} {expenseWord} totalling {formattedexpenseTotal}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = expenseSelector(state.expenses, state.filters) ;

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: expenseSelectorTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);