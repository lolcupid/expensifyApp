import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from './store/config';
import { Provider } from 'react-redux';
import { addExpense, startSetExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selector/expenses';
import './styles/styles.scss';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  })
