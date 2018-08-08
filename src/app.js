import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from './store/config';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selector/expenses';
import './styles/styles.scss';

const store = configStore();

store.dispatch(addExpense({description: 'water bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'gas bill', amount: 300, createdAt: -1000}));
store.dispatch(addExpense({description: 'rent bill', amount: 550, createdAt: 3000}));

store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000)

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
