import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configStore from './store/config';
import { Provider } from 'react-redux';
import { addExpense, startSetExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpense from './selector/expenses';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


let hasRendered = false;
const render = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    console.log('login');
    store.dispatch(startSetExpense()).then(() => {
      render();
    });
    if(history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    console.log('logout');
    render();
    history.push('/');
  }
})
