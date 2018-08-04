import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './styles/styles.scss';

const ExpenseDashBoardPage = () => {
  return (
    <div>
      this is dashboard page
    </div>
  )
}

const addExpensePage = () => {
  return (
    <div>
      this is add expense page
    </div>
  )
}

const editExpensePage = () => {
  return (
    <div>
      this is edit  page
    </div>
  )
}

const helpExpensePage = () => {
  return (
    <div>
      this is help page
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={ExpenseDashBoardPage} />
      <Route path='/create' component={addExpensePage} />
      <Route path='/edit' component={editExpensePage} />
      <Route path='/help' component={helpExpensePage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

